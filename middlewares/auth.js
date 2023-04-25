const tokenService = require('../services/tokenService');
const { messages } = require('../utils/constants');
const CreateError = require('../utils/CreateError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw CreateError.unauthorized(messages.UNAUTHORIZED_ERROR);
  }

  const accessToken = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = tokenService.verify(accessToken);
  } catch (err) {
    throw CreateError.unauthorized(messages.UNAUTHORIZED_ERROR);
  }

  req.user = payload;

  next();
};
