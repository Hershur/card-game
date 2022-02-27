import { CardObj } from 'helpers/types/types';

export interface IButtonTemplate {
  text: string;
  textProps: string;
  buttonProps: string;
  backgroundColor: string;
  handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface ICardTemplate {
  cardSuitImgSrc: string;
  cardName: string;
  textProps: string;
  cardProps: string;
  cardAnimate: string;
}

export interface IBoardTemplate {
  cardCounter: JSX.Element;
  cardDeck: JSX.Element;
  actionBtn: JSX.Element;
  message?: JSX.Element;
  footer?: JSX.Element;
  winner?: JSX.Element;
  // All other props
  [x: string]: unknown;
}

export interface ICardCounterState {
  cardCount: number;
  aceCardCount: number;
  uniqueCards: CardObj[];
  cards: CardObj[];
  hasAce: boolean;
}
