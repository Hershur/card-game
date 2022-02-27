import { IBoardTemplate } from 'helpers/interfaces/interfaces';

export const BoardTemplate = (props: IBoardTemplate): JSX.Element => {
  const { cardCounter, cardDeck, message, actionBtn, footer, winner, ...rest } = props;

  return (
    <div
      className="h-screen p-2  flex flex-col items-center overflow-hidden min-h-full font-monospace select-none"
      style={{
        background:
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), #0A863E',
      }}
      {...rest}
    >
      {cardCounter}
      {winner}
      {cardDeck}
      {message}
      {actionBtn}
      {footer}
    </div>
  );
};
