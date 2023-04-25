const { messages, codes } = require('../utils/constants');
const CreateError = require('../utils/CreateError');

const errorHandler = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(codes.BAD_REQUEST).json({
      message: messages.VALIDATION_ERROR,
      details: error.details?.map((detail) => detail.message),
    });
  }

  if (error.code === 11000) {
    return res.status(codes.CONFLICT).json({ message: messages.EMAIL_EXISTS });
  }

  if (error instanceof CreateError) {
    return res.status(error.code).json({ message: error.message });
  }

  res.status(codes.SERVER_ERROR).json({ message: messages.SERVER_ERROR });
  next();
};

module.exports = errorHandler;
