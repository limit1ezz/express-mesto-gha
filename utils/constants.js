module.exports.codes = {
  CREATED: 201,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  DELETED: 204,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
};

module.exports.messages = {
  SERVER_ERROR: 'На сервере произошла ошибка',
  VALIDATION_ERROR: 'Переданы некорректные данные',
  FORBIDDEN_ERROR: 'Удаление чужих карточек запрещено',
  USER_CREATED: 'Пользователь успешно создан',
  CARD_CREATED: 'Карточка успешно создана',
  CARD_DELETED: 'Карточка успешно удалена',
  USER_UPDATED: 'Информация о пользователе успешно обновлена',
  AVATAR_UPDATED: 'Аватар успешно обновлен',
  CREATE_USER_ERROR:
    'Не удалось создать пользователя. Пожалуйста, попробуйте еще раз позже.',
  CREATE_CARD_ERROR:
    'Не удалось создать карточку. Пожалуйста, попробуйте еще раз позже.',
  NOT_FOUND_USER: 'Пользователь не найден',
  NOT_FOUND_CARD: 'Карточкa не найдена',
  NOT_FOUND_PAGE: 'Страница не найдена',
  CARD_LIKED: 'Лайк поставлен',
  CARD_DISLIKED: 'Лайк удален',
  NOT_VALID_URL:
    'Hе является допустимым URL. Пример: http(s)://(www.)domain.com',
  NOT_VALID_EMAIL: 'Hе является допустимым EMAIL. Пример: example@domain.com',
  UNAUTHORIZED_LOGIN: 'Неверная почта или пароль',
  UNAUTHORIZED_ERROR: 'Необходима авторизация',
  EMAIL_EXISTS: 'Пользователь с таким email уже существует',
};

module.exports.regexp = {
  URL: '^(https?:\\/\\/)(www\\.)?[^\\s$.?#].[^\\s]*$',
  ID: '^[0-9a-fA-F]{24}$',
};
