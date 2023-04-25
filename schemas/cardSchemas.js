const Joi = require('joi');
const validator = require('validator');
const { regexp, messages } = require('../utils/constants');

module.exports.newCardSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    'string.base': 'Имя должно быть строкой',
    'string.empty': 'Поле с именем не может быть пустым',
    'string.min': 'Имя должно содержать не менее {#limit} символов',
    'string.max': 'Имя должно содержать не более {#limit} символов',
    'any.required': 'Имя обязательно для заполнения',
  }),
  link: Joi.string()
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

module.exports.cardIdSchema = Joi.string()
  .pattern(new RegExp(regexp.ID))
  .required()
  .messages({
    'string.base': 'ID должен быть строкой',
    'string.pattern.base': 'Невалидный ID',
    'any.required': 'ID является обязательным параметром',
  });
