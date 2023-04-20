const Joi = require('joi');
const { regexp } = require('../utils/constants');

module.exports.newUserSchema = Joi.object({
  name: Joi.string().min(2).max(30).required()
    .messages({
      'string.base': 'Имя должно быть строкой',
      'string.empty': 'Поле с именем не может быть пустым',
      'string.min': 'Имя должно содержать не менее {#limit} символов',
      'string.max': 'Имя должно содержать не более {#limit} символов',
      'any.required': 'Имя обязательно для заполнения',
    }),
  about: Joi.string().min(2).max(30).required()
    .messages({
      'string.base': 'Описание должно быть строкой',
      'string.empty': 'Поле с описанием не может быть пустым',
      'string.min': 'Описание должно содержать не менее {#limit} символов',
      'string.max': 'Описание должно содержать не более {#limit} символов',
      'any.required': 'Описание обязательно для заполнения',
    }),
  avatar: Joi.string().pattern(new RegExp(regexp.URL)).required().messages({
    'string.base': 'Аватар должен быть строкой',
    'string.pattern.base': 'Невалидная ссылка',
    'string.empty': 'Поле с аватаром не может быть пустым',
    'any.required': 'Аватар обязателен для заполнения',
  }),
});

module.exports.userInfoSchema = Joi.object({
  name: Joi.string().min(2).max(30).required()
    .messages({
      'string.base': 'Имя должно быть строкой',
      'string.empty': 'Поле с именем не может быть пустым',
      'string.min': 'Имя должно содержать не менее {#limit} символов',
      'string.max': 'Имя должно содержать не более {#limit} символов',
      'any.required': 'Имя обязательно для заполнения',
    }),
  about: Joi.string().min(2).max(30).required()
    .messages({
      'string.base': 'Описание должно быть строкой',
      'string.empty': 'Поле с описанием не может быть пустым',
      'string.min': 'Описание должно содержать не менее {#limit} символов',
      'string.max': 'Описание должно содержать не более {#limit} символов',
      'any.required': 'Описание обязательно для заполнения',
    }),
});

module.exports.userAvatarSchema = Joi.object({
  avatar: Joi.string().pattern(new RegExp(regexp.URL)).required().messages({
    'string.base': 'Аватар должен быть строкой',
    'string.pattern.base': 'Невалидная ссылка',
    'string.empty': 'Поле с аватаром не может быть пустым',
    'any.required': 'Аватар обязателен для заполнения',
  }),
});

module.exports.userIdSchema = Joi.string()
  .pattern(new RegExp(regexp.ID))
  .required()
  .messages({
    'string.base': 'ID должен быть строкой',
    'string.pattern.base': 'Невалидный ID',
    'any.required': 'ID является обязательным параметром',
  });
