const Joi = require('joi');
const { regexp } = require('../utils/constants');

module.exports.newCardSchema = Joi.object({
  name: Joi.string().min(2).max(30).required()
    .messages({
      'string.base': 'Имя должно быть строкой',
      'string.empty': 'Поле с именем не может быть пустым',
      'string.min': 'Имя должно содержать не менее {#limit} символов',
      'string.max': 'Имя должно содержать не более {#limit} символов',
      'any.required': 'Имя обязательно для заполнения',
    }),
  link: Joi.string().pattern(new RegExp(regexp.URL)).required().messages({
    'string.base': 'Cсылка должна быть строкой',
    'string.pattern.base': 'Невалидная ссылка',
    'string.empty': 'Поле с ссылкой не может быть пустым',
    'any.required': 'Ссылка обязательна для заполнения',
  }),
});

module.exports.cardIdSchema = Joi.string()
  .pattern(new RegExp(regexp.ID))
  .required()
  .messages({
    'string.base': 'ID должен быть строкой',
    'string.pattern.base': 'Невалидный ID',
    'any.required': 'ID является обязательным параметром',
  });
