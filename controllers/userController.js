const userService = require('../services/userService');
const { messages, codes } = require('../utils/constants');
const {
  userInfoSchema,
  userIdSchema,
  newUserSchema,
  userAvatarSchema,
} = require('../schemas/userSchemas');

module.exports.createUser = async (req, res) => {
  const validatedUser = await newUserSchema.validateAsync(req.body, {
    abortEarly: false,
  });

  const user = await userService.createUser(validatedUser);
  res.status(codes.CREATED).json({ message: messages.USER_CREATED, user });
};

module.exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

module.exports.getUser = async (req, res) => {
  const userId = await userIdSchema.validateAsync(req.params.userId, {
    abortEarly: false,
  });

  const users = await userService.getUser(userId);
  res.json(users);
};

module.exports.updateUser = async (req, res) => {
  const validatedUserInfo = await userInfoSchema.validateAsync(req.body, {
    abortEarly: false,
  });

  const user = await userService.updateUser(req.user._id, validatedUserInfo);
  res.json({ message: messages.USER_UPDATED, user });
};

module.exports.updateAvatar = async (req, res) => {
  const validatedAvatar = await userAvatarSchema.validateAsync(req.body, {
    abortEarly: false,
  });

  const user = await userService.updateAvatar(req.user._id, validatedAvatar);
  res.json({ message: messages.AVATAR_UPDATED, user });
};
