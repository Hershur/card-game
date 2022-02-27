import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Winner } from 'views/Winner/Winner';

const renderDealHand = () => {
  const { findAllByTestId, getAllByRole, findByTestId, getByText, debug } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Winner />
      </BrowserRouter>
    </Provider>
  );

  return { findAllByTestId, getAllByRole, findByTestId, getByText, debug };
};

describe('<Winner />', () => {
  test('should render the Winner page', async () => {
    const { findAllByTestId } = renderDealHand();

    const winner = await findAllByTestId('winner');

    expect(winner).toBeDefined();
  });

  test('the Cards deck should contain 0 cards, there should be no cards left', async () => {
    const { findByTestId } = renderDealHand();

    const cardDeck = await findByTestId('cards-deck');

    expect(cardDeck.childElementCount).toEqual(0);
  });

  test('should display "You won" and "Congratulations" ', () => {
    const { getByText } = renderDealHand();

    const younWon = getByText('You won!!');
    const congrats = getByText('Congratulations!!!');

    expect(younWon).toBeDefined();
    expect(congrats).toBeDefined();
  });

  test('should display a "Play Again" button ', () => {
    const { getAllByRole } = renderDealHand();

    const playAgainBtn = getAllByRole('button')[0];

    expect(playAgainBtn).toBeDefined();
  });

  test('should display winner flag ', () => {
    const { getAllByRole } = renderDealHand();

    const winnerFlag = getAllByRole('img')[0] as HTMLImageElement;

    expect(winnerFlag.src).toContain('winner.svg');
  });
});
