import assets from 'helpers/assets';

export const WinnerFlag = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center absolute w-11/12 transform laptop:translate-x-4 laptop:translate-y-20 mobile-phone:translate-x-1.5 small-phone:translate-x-1.5 mobile-phone:translate-y-16 small-phone:translate-y-4">
      <img className="h-28 w-full" src={assets.winner} alt="Winner" loading="lazy" />
    </div>
  );
};
