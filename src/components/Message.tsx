export const Message = ({
  msgLine1,
  msgLine2,
}: {
  msgLine1: string;
  msgLine2: string;
}): JSX.Element => {
  return (
    <div className="text-2xl text-white text-center font-medium m-5">
      <div>{msgLine1}</div>
      <div>{msgLine2}</div>
    </div>
  );
};
