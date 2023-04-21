module.exports.codes = {
  CREATED: 201,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  UNAUTHORIZED: 403,
  DELETED: 204,
};

module.exports.messages = {
  SERVER_ERROR: 'На сервере произошла ошибка',
  VALIDATION_ERROR: 'Переданы некорректные данные',
  UNAUTHORIZED_ERROR: 'Удаление чужих карточек запрещено',
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
};

module.exports.regexp = {
  URL: '^(https?:\\/\\/)(www\\.)?[^\\s$.?#].[^\\s]*$',
  ID: '^[0-9a-fA-F]{24}$',
};
