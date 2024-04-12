const bcrypt = require('bcrypt');
const userService = require('../services/user/user.service');
const responseHandler = require('../config/responseHandler');
const {
  registerValidation,
  loginValidation,
} = require('../validations/user.validation');
const { JWT_SECRET, user, pass } = process.env;
class UserController {
  async register(req, res) {
    try {
      const validationResult = await registerValidation(req.body);
      console.log(validationResult, 'result');
      if (validationResult && validationResult.error) {
        return res.json(
          responseHandler(validationResult.error.details[0].message, false)
        );
      }
      const isEmailAlreadyExists = await userService.isEmailAlreadyExists(
        req.body.email
      );
      if (isEmailAlreadyExists) {
        return res.json(responseHandler('Email Already Exists.', false));
      }
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const addUser = await userService.add(req.body);
      if (addUser) {
        return res.json(responseHandler('User registered successfully.', true));
      }
      return res.json(
        responseHandler('Something went wrong! Please try again.', false)
      );
    } catch (err) {
      console.log(err);
      return res.json(
        responseHandler('something wrong! Please try again', false, err)
      );
    }
  }

  // Login admin
  async login(req, res) {
    try {
      const validationResult = await loginValidation(req.body);
      if (validationResult.error) {
        return res.json(
          responseHandler(validationResult.error.details[0].message, false)
        );
      }
      const iUserExists = await userService.isEmailAlreadyExists(
        req.body.email
      );
      if (!iUserExists) {
        return res.json(responseHandler('User does not exists', false));
      }
      isMatched = bcrypt.compareSync(req.body.password, iUserExists.password);

      if (!isMatched) {
        return res.json(responseHandler('Password mismatch.', false));
      }
      // Generate Token
      const token = await userService.generateAuthToken(user);
      iUserExists.token = token;
      return res.json(
        responseHandler('User is successfully logged in!!', true, {
          userId: iUserExists._id,
          email: iUserExists.email,
          userName: iUserExists.userName,
          token: iUserExists.token,
        })
      );
    } catch (error) {
      return res.json(
        responseHandler('something went wrong! Please try again.', false, error)
      );
    }
  }
}

module.exports = new UserController();
