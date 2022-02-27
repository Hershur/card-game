import { configureStore } from '@reduxjs/toolkit';
import cardCounterReducer from './slices/cardCounterSlice';

export const store = configureStore({
  reducer: {
    cardCounter: cardCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
