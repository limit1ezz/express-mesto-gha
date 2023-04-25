const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const {
  getUsers,
  getUser,
  updateUser,
  updateAvatar,
  getMyself,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', asyncHandler(getUsers));
router.get('/me', asyncHandler(getMyself));
router.get('/:userId', asyncHandler(getUser));
router.patch('/me', asyncHandler(updateUser));
router.patch('/me/avatar', asyncHandler(updateAvatar));

module.exports = router;
