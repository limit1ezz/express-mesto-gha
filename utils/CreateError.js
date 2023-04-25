const { codes } = require('./constants');

class CreateError extends Error {
  constructor(code, message) {
    super(code, message);
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new CreateError(codes.BAD_REQUEST, msg);
  }

  static internalServer(msg) {
    return new CreateError(codes.SERVER_ERROR, msg);
  }

  static notFound(msg) {
    return new CreateError(codes.NOT_FOUND, msg);
  }

  static forbidden(msg) {
    return new CreateError(codes.FORBIDDEN, msg);
  }

  static unauthorized(msg) {
    return new CreateError(codes.UNAUTHORIZED, msg);
  }

  static conflict(msg) {
    return new CreateError(codes.CONFLICT, msg);
  }
}

module.exports = CreateError;
