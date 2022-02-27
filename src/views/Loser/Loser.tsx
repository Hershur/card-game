import { CardCounter } from 'components/CardCounter';
import { CardsDeck } from 'components/CardsDeck';
import { Message } from 'components/Message';
import { BoardTemplate } from 'components/templates/BoardTemplate';
import { ButtonBoxTemplate } from 'components/templates/ButtonBoxTemplate';
import { ButtonTemplate } from 'components/templates/ButtonTemplate';
import { returnHome } from 'helpers/utils';

export const Loser = (): JSX.Element => {
  return (
    <BoardTemplate
      data-testid="loser"
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
      message={<Message msgLine1="You lose." msgLine2="Better luck next time!" />}
    />
  );
};
