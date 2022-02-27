export const ButtonBoxTemplate = ({ btnElement }: { btnElement: JSX.Element }): JSX.Element => {
  return (
    <div className="laptop:m-8 mobile-phone:m-3 small-phone:m-3 font-cursive">{btnElement}</div>
  );
};
