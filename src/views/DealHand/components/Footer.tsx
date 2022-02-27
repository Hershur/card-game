import { ButtonBoxTemplate } from 'components/templates/ButtonBoxTemplate';
import { ButtonTemplate } from 'components/templates/ButtonTemplate';

export const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-center lg:justify-end w-full">
      <div />

      <ButtonBoxTemplate
        btnElement={
          <ButtonTemplate
            text="Reset"
            textProps="text-yellow-shade text-xl"
            backgroundColor="bg-transparent"
            buttonProps="rounded-2xl align-middle text-center py-2 px-10 border-2 border-yellow-shade hover:bg-yellow-shade hover:text-black"
            // handleClick={handleResetButtonClick}
            handleClick={() => {
              window.location.replace('/');
            }}
          />
        }
      />
    </div>
  );
};
