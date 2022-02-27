import { CardObj } from '../types/types';
import { cardNames, cardSuits, shuffleArray } from '../utils';

const generateCardsDeck = (): Array<CardObj> => {
  const cardNamesLen = cardNames.length;
  const cardSuitsLen = cardSuits.length;

  const cardDeck = [];

  for (let i = 0; i < cardSuitsLen; i++) {
    for (let j = 0; j < cardNamesLen; j++) {
      const cardObj = {
        id: cardSuits[i][0] + j,
        name: cardNames[j],
        suits: cardSuits[i],
      };
      cardDeck.push(cardObj);
    }
  }

  return cardDeck;
};

export const generateRandomCardsDeck = (): Array<CardObj> => {
  const cardsDeck: Array<CardObj> = generateCardsDeck();

  return shuffleArray<CardObj>(cardsDeck);
};
