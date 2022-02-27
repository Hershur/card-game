import assets from 'helpers/assets';
import {
  cardAnimationProps,
  cardTransformProps,
  cardTypesProps,
} from 'helpers/styles/utils.styles';
import { noOfUniqueCards } from 'helpers/utils';
import { useAppSelector } from 'hooks/reduxHooks';
import { CardTemplate } from './templates/CardTemplate';

export const CardsDeck = (): JSX.Element => {
  const { uniqueCards } = useAppSelector((state) => state.cardCounter);

  return (
    <div
      data-testid="cards-deck"
      className="laptop:gap-7 small-phone:gap-3 mobile-phone:gap-2 flex flex-wrap  w-7/8 justify-center h-64 m-8"
    >
      {uniqueCards.map((card, i) => (
        <CardTemplate
          key={card.id}
          cardName={card.name}
          cardSuitImgSrc={assets[card.suits]}
          textProps={cardTypesProps[card.suits]}
          cardProps={uniqueCards.length >= noOfUniqueCards ? cardTransformProps[i] : ''}
          cardAnimate={cardAnimationProps[i]}
        />
      ))}
    </div>
  );
};
