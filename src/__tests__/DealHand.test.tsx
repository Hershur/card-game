import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { DealHand } from 'views/DealHand/DealHand';

const renderDealHand = () => {
  const { findAllByTestId, getAllByRole, findByTestId, debug } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DealHand />
      </BrowserRouter>
    </Provider>
  );

  return { findAllByTestId, getAllByRole, findByTestId, debug };
};

describe('<DealHand />', () => {
  test('the Cards  should be 47 cards on render', async () => {
    const { findByTestId } = renderDealHand();

    const cardCount = (await findByTestId('cards-count')).textContent;

    expect(cardCount).toBe('47');
  });

  test('should render the Deal hand page', async () => {
    const { findAllByTestId } = renderDealHand();

    const dealHand = await findAllByTestId('deal-hand');

    expect(dealHand).toBeDefined();
  });

  test('should display a page with the Deal and Reset button', () => {
    const { getAllByRole } = renderDealHand();

    const button = getAllByRole('button');

    expect(button[0].textContent).toBe('DEAL');
    expect(button[1].textContent).toContain('Reset');
  });

  test('the Cards deck should container 5 cards', async () => {
    const { findByTestId } = renderDealHand();

    const cardDeck = await findByTestId('cards-deck');

    expect(cardDeck.childElementCount).toEqual(5);
  });

  test('should fire onclick of the deal', async () => {
    const { getAllByRole, findByTestId } = renderDealHand();

    const button = getAllByRole('button');

    const cardCount = (await findByTestId('cards-count')).textContent;
    /**
     * After calling the render method 5 times
     * the card left should 27 i.e 52 - (5*5) = 27
     */
    expect(cardCount).toBe('27');

    // Deal button
    fireEvent.click(button[0]);

    const cardCount2 = (await findByTestId('cards-count')).textContent;
    /**
     * After calling the render method 4 times and firing the deal button = 6 times
     * the card left should 22 i.e 52 - (5*6) = 22
     */
    expect(cardCount2).toBe('22');
  });
});
