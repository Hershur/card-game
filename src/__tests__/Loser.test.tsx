import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ButtonTemplate } from 'components/templates/ButtonTemplate';
import { store } from 'redux/store';
import { Loser } from 'views/Loser/Loser';

const renderDealHand = () => {
  const { findAllByTestId, getAllByRole, findByTestId, getByText, debug } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Loser />
      </BrowserRouter>
    </Provider>
  );

  return { findAllByTestId, getAllByRole, findByTestId, getByText, debug };
};

describe('<Loser />', () => {
  test('should render the Loser page', async () => {
    const { findAllByTestId } = renderDealHand();

    const loser = await findAllByTestId('loser');

    expect(loser).toBeDefined();
  });

  test('should display "You lose." and "Better luck next time!" ', () => {
    const { getByText } = renderDealHand();

    const youLose = getByText('You lose.');
    const betterLuck = getByText('Better luck next time!');

    expect(youLose).toBeDefined();
    expect(betterLuck).toBeDefined();
  });

  test('should display a "Play Again" button ', () => {
    const { getAllByRole } = renderDealHand();

    const playAgainBtn = getAllByRole('button')[0];

    expect(playAgainBtn).toBeDefined();
  });

  test('calls onClick prop when clicked', () => {
    // const { getAllByRole } = renderDealHand();

    // const playAgainBtn = getAllByRole('button')[0];
    const handleClick = jest.fn();

    render(
      <ButtonTemplate
        text="Play Again"
        textProps="text-yellow-shade text-xl"
        backgroundColor="bg-transparent"
        buttonProps="rounded-2xl align-middle text-center py-2 px-10 border-2 border-yellow-shade hover:bg-yellow-shade hover:text-black"
        handleClick={handleClick}
      />
    );

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
