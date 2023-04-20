const express = require('express');
const { messages, codes } = require('../utils/constants');
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.all('*', (req, res) => {
  res.status(codes.NOT_FOUND).json({ message: messages.NOT_FOUND_PAGE });
});

module.exports = router;
