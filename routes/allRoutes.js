const express = require('express');
const { messages, codes } = require('../utils/constants');
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');
const homeRoutes = require('./homeRoutes');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/users', auth, userRoutes);
router.use('/cards', auth, cardRoutes);
router.all('*', auth, (req, res) => {
  res.status(codes.NOT_FOUND).json({ message: messages.NOT_FOUND_PAGE });
});

module.exports = router;
