import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardCounter } from 'components/CardCounter';
import { CardsDeck } from 'components/CardsDeck';
import { BoardTemplate } from 'components/templates/BoardTemplate';
import { ButtonBoxTemplate } from 'components/templates/ButtonBoxTemplate';
import { ButtonTemplate } from 'components/templates/ButtonTemplate';
import { useDealCards } from 'hooks/useDealCards';
import { Footer } from './components/Footer';

export const DealHand = (): JSX.Element => {
  const { handleDealButtonClick, uniqueCards, cardCount, hasAce, aceCardCount } = useDealCards();
  const navigate = useNavigate();

  useEffect(() => {
    if (uniqueCards.length > 0 && cardCount === 0 && hasAce) {
      navigate('win');
    } else if (uniqueCards.length > 0 && cardCount !== 0 && aceCardCount === 0) {
      navigate('lose');
    }
  });

  return (
    <BoardTemplate
      data-testid="deal-hand"
      cardCounter={<CardCounter />}
      cardDeck={<CardsDeck />}
      actionBtn={
        <ButtonBoxTemplate
          btnElement={
            <ButtonTemplate
              text="DEAL"
              textProps="color-black text-5xl"
              backgroundColor="bg-yellow-shade"
              buttonProps="rounded-2xl align-middle text-center py-2 px-10 hover:bg-orange-shade"
              handleClick={handleDealButtonClick}
            />
          }
        />
      }
      footer={<Footer />}
    />
  );
};
