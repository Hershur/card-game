import { IButtonTemplate } from 'helpers/interfaces/interfaces';

export const ButtonTemplate = ({
  text,
  textProps,
  backgroundColor,
  buttonProps,
  handleClick,
}: IButtonTemplate): JSX.Element => {
  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className={`${textProps} ${backgroundColor} ${buttonProps}`}
      >
        {text}
      </button>
    </div>
  );
};
