export const noOfUniqueCards = 5;

export const cardSuits: string[] = ['heart', 'diamond', 'spade', 'clover'];

export const cardNames: string[] = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

export const getCrytoRandomNumber = () => {
  const randomBuffer = new Uint32Array(1);

  window.crypto.getRandomValues(randomBuffer);

  const randomNumber = randomBuffer[0] / (0xffffffff + 1);

  return randomNumber;
};

export const shuffleArray = <T>(array: Array<T>): Array<T> => {
  const newArray = Array.from(array);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

export const selectNitems = <T>(items: Array<T>, n: number): Array<T> => {
  return items.slice(0, n);
};

export const removeNitems = <T>(items: Array<T>, n: number): Array<T> => {
  return items.slice(n);
};

export const returnHome = () => window.location.replace('/');
