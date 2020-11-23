const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const isEven = (number) => number % 2 === 0;

const getGameRound = (getRandomInt) => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correct = isEven(question) ? 'yes' : 'no';
  return [question, correct];
};

export default {
  title: 'Answer "yes" if the number is even, otherwise answer "no".',
  getGameRound,
};
