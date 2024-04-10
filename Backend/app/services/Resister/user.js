const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { array } = require('joi');

const userSchema = require('../../Schema/user');

class UserModel {
  // Check user already exist with email
  async checkLoginUser(req_email) {
    return await userSchema.findOne({ email: req_email, is_deleted: 0 });
  }

  // generate jwt token
  async generateAuthToken(user) {
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );
    return token;
  }

  // Retrieve a single admin with id
  async getUser(request_id) {
    return await userSchema.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(request_id),
          is_deleted: 0,
          // is_account_active: 1,
          isSuspendedAccount: false,
        },
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'role',
          foreignField: '_id',
          as: 'role_data',
        },
      },
      {
        $project: {
          _id: 1,
          first_name: 1,
          last_name: 1,
          mobile_number: 1,
          username: 1,
          email: 1,
          password: 1,
          role_data: { $arrayElemAt: ['$role_data', 0] },
          status: 1,
          is_deleted: 1,
          is_account_active: 1,
          createdAt: 1,
          updatedAt: 1,
          ip: 1,
          last_login: 1,
          token: 1,
          otp: 1,
          otp_expiry: 1,
          max_password_reset_requests: 1,
          max_password_reset_attempts: 1,
          isSuspendedAccount: 1,
          admin_profile: 1,
          full_name: 1,
          id: 1,
        },
      },
    ]);
    await userSchema.findById(request_id).populate('roles');
  }

  // Create new user
  async add(data) {
    return await userSchema.create(data);
  }
}

module.exports = new UserModel();
