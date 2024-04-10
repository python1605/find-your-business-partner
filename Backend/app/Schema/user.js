const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const emailValidator = function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};

const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First name is required'],
    },
    last_name: {
      type: String,
    },
    full_name: {
      type: String,
    },
    mobile_number: {
      type: JSON,
    },
    username: {
      type: String,
    },
    user_profile: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'EmailId required'],
      trim: true,
      validate: [emailValidator, 'Enter proper Email Id'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
    },
    status: {
      type: Number,
      min: 0,
      max: 1,
      default: 1,
    },
    is_deleted: {
      type: Number,
      min: 0,
      max: 1,
      default: 0,
    },
    otp: {
      type: Number,
    },
    otp_expiry: {
      type: Date,
    },
    link_expiry: {
      type: Date,
    },
    token: {
      type: String,
    },
    is_account_active: {
      type: Number,
      min: 0,
      max: 1,
      default: 1,
    },
    ip: {
      type: String,
    },
    last_login: {
      type: Date,
    },
    isSuspendedAccount: {
      type: Boolean,
      default: false,
    },
    max_password_reset_requests: {
      type: Number,
    },
    max_password_reset_attempts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual('roles', {
  ref: 'Role',
  localField: '_id',
  foreignField: 'role',
});

// Changing "_id" key to "id"
UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('User', UserSchema);
