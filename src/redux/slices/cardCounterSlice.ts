import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardCounterState } from 'helpers/interfaces/interfaces';
import { generateRandomCardsDeck } from 'helpers/others/generateRandomCardsDeck';
import { CardObj } from 'helpers/types/types';
import { removeNitems, selectNitems } from 'helpers/utils';

// Define the initial state using that type
const initialState: ICardCounterState = {
  cardCount: 0,
  cards: generateRandomCardsDeck(),
  uniqueCards: [],
  aceCardCount: 0,
  hasAce: false,
};

export const cardCounterSlice = createSlice({
  name: 'cardCounter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    countCardsLeft: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.cardCount = state.cards.length;
    },
    pickUniqueCards: (state, action: PayloadAction<number>) => {
      // return { ...state, uniqueCards: selectNitems<CardObj>(state.cards, action.payload) };

      // Used this method since RTK uses the Immer library internally
      // eslint-disable-next-line no-param-reassign
      state.uniqueCards = selectNitems<CardObj>(state.cards, action.payload);
    },
    checkCardsLeft: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.cards = removeNitems<CardObj>(state.cards, action.payload);
    },
    checkAceCardsLeft: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.aceCardCount = state.cards.filter((c) => c.name === action.payload).length;
    },
    checkCardDealHasAce: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.hasAce = state.uniqueCards.filter((c) => c.name === action.payload).length > 0;
    },
    reset: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const {
  countCardsLeft,
  pickUniqueCards,
  checkCardsLeft,
  checkAceCardsLeft,
  checkCardDealHasAce,
  reset,
} = cardCounterSlice.actions;

export default cardCounterSlice.reducer;
