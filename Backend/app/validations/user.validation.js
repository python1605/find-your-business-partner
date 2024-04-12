const Joi = require('joi');
async function loginValidation(data) {
  const loginschema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(3).max(15).required(),
  });

  try {
    await loginschema.validateAsync(data);
  } catch (error) {
    return error;
  }
}
async function registerValidation(data) {
  const registerSchema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(3).max(15).required(),
  });

  try {
    await registerSchema.validateAsync(data);
  } catch (error) {
    return error;
  }
}

module.exports = { loginValidation, registerValidation };
