const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const { login, createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signin', asyncHandler(login));
router.post('/signup', asyncHandler(createUser));

module.exports = router;
