const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { messages } = require('../utils/constants');
const CreateError = require('../utils/CreateError');

module.exports.createUser = async (validatedUser) => {
  const hashedPassword = await bcrypt.hash(validatedUser.password, 12);

  const user = await User.create({
    ...validatedUser,
    password: hashedPassword,
  });

  if (!user) {
    throw CreateError.internalServer(messages.CREATE_USER_ERROR);
  } else {
    return user;
  }
};

module.exports.getUsers = async () => {
  const users = await User.find({});
  return users;
};

module.exports.getUser = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw CreateError.notFound(messages.NOT_FOUND_USER);
  } else {
    return user;
  }
};

module.exports.updateUser = async (userId, validatedUserInfo) => {
  const user = await User.findByIdAndUpdate(userId, validatedUserInfo, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw CreateError.notFound(messages.NOT_FOUND_USER);
  } else {
    return user;
  }
};

module.exports.updateAvatar = async (userId, validatedAvatar) => {
  const user = await User.findByIdAndUpdate(userId, validatedAvatar, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw CreateError.notFound(messages.NOT_FOUND_USER);
  } else {
    return user;
  }
};

module.exports.checkUser = async ({ email, password }) => {
  const existingUser = await User.findOne({ email }).select('+password');
  if (!existingUser) {
    throw CreateError.unauthorized(messages.UNAUTHORIZED_LOGIN);
  }

  const isPasswordEqual = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordEqual) {
    throw CreateError.unauthorized(messages.UNAUTHORIZED_LOGIN);
  }

  return existingUser;
};
