import { ICardTemplate } from 'helpers/interfaces/interfaces';

export const CardTemplate = ({
  cardName,
  cardSuitImgSrc,
  textProps,
  cardProps,
  cardAnimate,
}: ICardTemplate): JSX.Element => {
  return (
    <div className={cardAnimate}>
      <div
        className={`laptop:transform ${cardProps} hover:translate-y-4 delay-200 duration-500 bg-white flex flex-col gap-1 justify-between flex-wrap rounded-2xl laptop:p-5 tablet:p-4 small-phone:p-2 mobile-phone:p-2 desktop:h-44 laptop:h-44 tablet:h-40 mobile-phone:h-36 small-phone:h-32`}
      >
        <div className="flex">
          <div className="basis-1/4 flex flex-col justify-center items-center">
            <div className={`${textProps} laptop:text-5xl small-phone:text-3xl font-extrabold`}>
              {cardName}
            </div>
            <div className="laptop:w-5 small-phone:w-4">
              <img src={cardSuitImgSrc} alt={cardSuitImgSrc} loading="lazy" />
            </div>
          </div>

          <div className="basis-3/4" />
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div />
          <div className="laptop:w-16 small-phone:w-11 mobile-phone:w-11">
            <img src={cardSuitImgSrc} alt={cardSuitImgSrc} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};
