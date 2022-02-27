import { useAppSelector } from 'hooks/reduxHooks';

export const CardCounter = (): JSX.Element => {
  const { cardCount, aceCardCount } = useAppSelector((state) => state.cardCounter);

  // const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center border border-light-yellow bg-black text-white laptop:p-4 small-phone:p-4 w-40 laptop:m-8 mobile-phone:m-10">
        <div data-testid="cards-count" className="text-3xl font-extrabold">
          {cardCount}
        </div>
        <div>Cards Left</div>
      </div>

      <div className="flex flex-col justify-center items-center border border-light-yellow bg-black text-white laptop:p-4 small-phone:p-4 w-40 laptop:m-8 mobile-phone:m-10">
        <div className="text-3xl font-extrabold">{aceCardCount}</div>
        <div>Aces Left</div>
      </div>
    </div>
  );
};
