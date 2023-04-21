const Card = require('../models/Card');

const { messages } = require('../utils/constants');
const CreateError = require('../utils/CreateError');

module.exports.createCard = async (validatedCard) => {
  const card = await Card.create(validatedCard);

  if (!card) {
    throw CreateError.internalServer(messages.CREATE_CARD_ERROR);
  } else {
    return card;
  }
};

module.exports.getCards = async () => {
  const cards = await Card.find({});
  return cards;
};

module.exports.deleteCard = async (cardId, userId) => {
  const card = await Card.findById(cardId);

  if (!card) {
    throw CreateError.notFound(messages.NOT_FOUND_CARD);
  }

  if (card.owner.toString() !== userId) {
    throw CreateError.unauthorized(messages.UNAUTHORIZED_ERROR);
  }

  await Card.findByIdAndRemove(cardId);
  return card;
};

module.exports.likeCard = async (cardId, userId) => {
  const card = await Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: userId } },
    { new: true }
  )
    .populate({
      path: 'likes owner',
      model: 'User',
    })
    .exec();

  if (!card) {
    throw CreateError.notFound(messages.NOT_FOUND_CARD);
  }

  return card;
};

module.exports.dislikeCard = async (cardId, userId) => {
  const card = await Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: userId } },
    { new: true }
  )
    .populate({
      path: 'likes owner',
      model: 'User',
    })
    .exec();

  if (!card) {
    throw CreateError.notFound(messages.NOT_FOUND_CARD);
  }

  return card;
};
