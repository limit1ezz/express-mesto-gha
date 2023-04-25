const Joi = require('joi');
const validator = require('validator');
const { regexp, messages } = require('../utils/constants');

module.exports.newUserSchema = Joi.object({
  name: Joi.string().min(2).max(30).messages({
    'string.base': 'Имя должно быть строкой',
    'string.empty': 'Поле с именем не может быть пустым',
    'string.min': 'Имя должно содержать не менее {#limit} символов',
    'string.max': 'Имя должно содержать не более {#limit} символов',
  }),
  about: Joi.string().min(2).max(30).messages({
    'string.base': 'Описание должно быть строкой',
    'string.empty': 'Поле с описанием не может быть пустым',
    'string.min': 'Описание должно содержать не менее {#limit} символов',
    'string.max': 'Описание должно содержать не более {#limit} символов',
  }),
  avatar: Joi.string().custom((value, helpers) => {
    const options = {
      protocols: ['http', 'https'],
      require_protocol: true,
    };
    if (validator.isURL(value, options)) {
      return value;
    }
    return helpers.message({
      custom: messages.NOT_VALID_URL,
    });
  }),
  email: Joi.string()
    .custom((value, helpers) => {
      if (validator.isEmail(value)) {
        return value;
      }
      return helpers.message({
        custom: messages.NOT_VALID_EMAIL,
      });
    })
    .required(),
  password: Joi.string().required(),
});

module.exports.userInfoSchema = Joi.object({
  name: Joi.string().min(2).max(30).messages({
    'string.base': 'Имя должно быть строкой',
    'string.empty': 'Поле с именем не может быть пустым',
    'string.min': 'Имя должно содержать не менее {#limit} символов',
    'string.max': 'Имя должно содержать не более {#limit} символов',
    'any.required': 'Имя обязательно для заполнения',
  }),
  about: Joi.string().min(2).max(30).messages({
    'string.base': 'Описание должно быть строкой',
    'string.empty': 'Поле с описанием не может быть пустым',
    'string.min': 'Описание должно содержать не менее {#limit} символов',
    'string.max': 'Описание должно содержать не более {#limit} символов',
    'any.required': 'Описание обязательно для заполнения',
  }),
});

module.exports.userAvatarSchema = Joi.object({
  avatar: Joi.string()
    .custom((value, helpers) => {
      const options = {
        protocols: ['http', 'https'],
        require_protocol: true,
      };
      if (validator.isURL(value, options)) {
        return value;
      }
      return helpers.message({
        custom: messages.NOT_VALID_URL,
      });
    })
    .required(),
});

module.exports.userIdSchema = Joi.string()
  .pattern(new RegExp(regexp.ID))
  .required()
  .messages({
    'string.base': 'ID должен быть строкой',
    'string.pattern.base': 'Невалидный ID',
    'any.required': 'ID является обязательным параметром',
  });

module.exports.loginSchema = Joi.object({
  email: Joi.string()
    .custom((value, helpers) => {
      if (validator.isEmail(value)) {
        return value;
      }
      return helpers.message({
        custom: messages.NOT_VALID_EMAIL,
      });
    })
    .required(),
  password: Joi.string().required(),
});
