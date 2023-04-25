const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

const { codes } = require('../utils/constants');

module.exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res
    .status(codes.CREATED)
    .json({ message: 'Пользователь успешно создан', user });
};

module.exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

module.exports.getUser = async (req, res) => {
  const user = await userService.getUser(req.params.userId);
  res.json(user);
};

module.exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(req.user._id, req.body);
  res.json({ message: 'Информация успешно обновлена', user });
};

module.exports.updateAvatar = async (req, res) => {
  const user = await userService.updateUser(req.user._id, req.body);
  res.json({ message: 'Аватар успешно обновлен', user });
};

module.exports.login = async (req, res) => {
  const checkedUser = await userService.checkUser(req.body);
  const accessToken = tokenService.generate({ _id: checkedUser._id });
  res.send({ message: 'Аутентификация успешно пройдена', accessToken });
};

module.exports.getMyself = async (req, res) => {
  const user = await userService.getUser(req.user._id);
  res.json(user);
};
