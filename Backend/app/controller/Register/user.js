const ip = require('ip');

const crypto = require('crypto-js');
const userModel = require('../../services/Resister/user');
const errorHandler = require('../../config/errorHandler');

const { JWT_SECRET, user, pass, UI_Host } = process.env;
class UserController {
  async register(req, res) {
    try {
      // Check user with email
      const user = await userModel.checkLoginUser(req.body.email);
      if (user) {
        return res.json(
          errorHandler('User Already Exists with this email', false)
        );
      }
      // Encrypt password
      req.body.password = crypto.AES.encrypt(
        req.body.password,
        JWT_SECRET
      ).toString();

      if (!req.body.full_name) {
        if (!req.body.last_name) {
          req.body.full_name = req.body.first_name;
        } else {
          req.body.full_name = `${req.body.first_name} ${req.body.last_name}`;
        }
      }
      const profilePath = `${process.env.Host}/assets/images/user/`;
      const profile = req.body.profile;
      if (profile) {
        req.body.profile = `${profilePath}${profile}`;
      }
      const data = await userModel.add(req.body);
      return res.json(
        errorHandler('Admin User Registered successfully', true, data, 200)
      );
    } catch (err) {
      console.log(err);
      return res.json(errorHandler('something wrong', false, err, 200));
    }
  }

  // Login admin
  async login(req, res) {
    try {
      console.log(req.body);
      // Check activate user with email
      const user = await userModel.checkLoginUser(req.body.email);
      if (user) {
        if (user.isSuspendedAccount == true) {
          return res.json(
            errorHandler('Your account is suspended.', false, false)
          );
        }
        if (user.is_account_active == 0) {
          return res.json(
            errorHandler(
              'Your account has disabled please contact to admin',
              false,
              false
            )
          );
        }
      } else {
        return res.json(
          errorHandler('User not found.', false, 'User not found.')
        );
      }

      // decrypt database password
      const decrypted = crypto.AES.decrypt(user.password, JWT_SECRET).toString(
        crypto.enc.Utf8
      );

      // Compare password
      if (req.body.password !== decrypted) {
        return res.json(
          errorHandler(
            'Your email and password do not match. Please try again',
            false,
            false
          )
        );
      }

      // Generate Token
      const token = await userModel.generateAuthToken(user);
      user.token = token;

      // Update last login time and ip address
      user.last_login = Date.now();
      user.ip = ip.address();
      await userModel.update(user.id, user);
      const admin = await userModel.getUser(user.id);
      return res.json(
        errorHandler('User is successfully logged in!!', true, {
          userId: user._id,
          email: user.email,
          username: user.first_name,
          token: user.token,
        })
      );
    } catch (error) {
      res.json(errorHandler('server error', false, error));
    }
  }
}

module.exports = new UserController();
