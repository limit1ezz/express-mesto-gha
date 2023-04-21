const User = require('../models/User');
const { messages } = require('../utils/constants');
const CreateError = require('../utils/CreateError');

module.exports.createUser = async (validatedUser) => {
  const user = await User.create(validatedUser);

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
