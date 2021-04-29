const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = (generateRandomInt) => {
  const question = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateRound,
};
