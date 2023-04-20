const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', asyncHandler(getUsers));
router.get('/:userId', asyncHandler(getUser));
router.post('/', asyncHandler(createUser));
router.patch('/me', asyncHandler(updateUser));
router.patch('/me/avatar', asyncHandler(updateAvatar));

module.exports = router;
