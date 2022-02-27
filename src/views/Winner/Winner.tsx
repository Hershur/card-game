import { useEffect } from 'react';
import { CardCounter } from 'components/CardCounter';
import { CardsDeck } from 'components/CardsDeck';
import { Message } from 'components/Message';
import { BoardTemplate } from 'components/templates/BoardTemplate';
import { ButtonBoxTemplate } from 'components/templates/ButtonBoxTemplate';
import { ButtonTemplate } from 'components/templates/ButtonTemplate';
import { displayConfetti } from 'helpers/others/displayConfetti';
import { returnHome } from 'helpers/utils';
import { WinnerFlag } from './components/WinnerFlag';

export const Winner = (): JSX.Element => {
  useEffect(() => {
    // display confetti celebrations
    displayConfetti();
  }, []);

  return (
    <BoardTemplate
      data-testid="winner"
      cardCounter={<CardCounter />}
      cardDeck={<CardsDeck />}
      actionBtn={
        <ButtonBoxTemplate
          btnElement={
            <ButtonTemplate
              text="Play Again"
              textProps="text-yellow-shade text-xl"
              backgroundColor="bg-transparent"
              buttonProps="rounded-2xl align-middle text-center py-2 px-10 border-2 border-yellow-shade hover:bg-yellow-shade hover:text-black"
              handleClick={returnHome}
            />
          }
        />
      }
      winner={<WinnerFlag />}
      message={<Message msgLine1="You won!!" msgLine2="Congratulations!!!" />}
    />
  );
};
