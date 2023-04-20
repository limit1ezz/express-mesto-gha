const cardService = require('../services/cardService');
const { messages, codes } = require('../utils/constants');
const { newCardSchema, cardIdSchema } = require('../schemas/cardSchemas');

module.exports.createCard = async (req, res) => {
  const validatedCard = await newCardSchema.validateAsync(req.body, {
    abortEarly: false,
  });
  const card = await cardService.createCard({
    ...validatedCard,
    owner: req.user._id,
  });
  res.status(codes.CREATED).json({ message: messages.CARD_CREATED, card });
};

module.exports.getCards = async (req, res) => {
  const cards = await cardService.getCards();
  res.json(cards);
};

module.exports.deleteCard = async (req, res) => {
  const cardId = await cardIdSchema.validateAsync(req.params.cardId, {
    abortEarly: false,
  });
  const deletedCard = await cardService.deleteCard(cardId, req.user._id);
  res.json({ message: messages.CARD_DELETED, deletedCard });
};

module.exports.likeCard = async (req, res) => {
  const cardId = await cardIdSchema.validateAsync(req.params.cardId, {
    abortEarly: false,
  });
  const likedCard = await cardService.likeCard(cardId, req.user._id);
  res.json({ message: messages.CARD_LIKED, likedCard });
};

module.exports.dislikeCard = async (req, res) => {
  const cardId = await cardIdSchema.validateAsync(req.params.cardId, {
    abortEarly: false,
  });
  const dislikedCard = await cardService.dislikeCard(cardId, req.user._id);
  res.json({ message: messages.CARD_DISLIKED, dislikedCard });
};
