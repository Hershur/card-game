import { useEffect, useState } from 'react';
import { noOfUniqueCards } from 'helpers/utils';
import {
  checkAceCardsLeft,
  checkCardDealHasAce,
  checkCardsLeft,
  countCardsLeft,
  pickUniqueCards,
} from 'redux/slices/cardCounterSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useDealCards = () => {
  const dispatch = useAppDispatch();
  const { cardCount, aceCardCount, uniqueCards, cards, hasAce } = useAppSelector(
    (state) => state.cardCounter
  );
  const [triggerEffect, setTriggerEffect] = useState(false);

  const handleDealButtonClick = () => {
    setTriggerEffect(!triggerEffect);
  };

  useEffect(() => {
    // Pick unique cards from deck
    dispatch(pickUniqueCards(noOfUniqueCards));

    // Check the cards left in the deck after pick
    dispatch(checkCardsLeft(noOfUniqueCards));

    // Check ace cards left in the deck after pick
    dispatch(checkAceCardsLeft('A'));

    // Check if card deal has ace
    dispatch(checkCardDealHasAce('A'));

    // Count number of cards left in the deck
    dispatch(countCardsLeft());
  }, [dispatch, triggerEffect]);

  return {
    cardCount,
    aceCardCount,
    uniqueCards,
    cards,
    handleDealButtonClick,
    hasAce,
  };
};
