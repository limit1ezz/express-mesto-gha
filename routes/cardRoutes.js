const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cardController');

const router = express.Router();

router.get('/', asyncHandler(getCards));
router.post('/', asyncHandler(createCard));
router.delete('/:cardId', asyncHandler(deleteCard));
router.put('/:cardId/likes', asyncHandler(likeCard));
router.delete('/:cardId/likes', asyncHandler(dislikeCard));

module.exports = router;
