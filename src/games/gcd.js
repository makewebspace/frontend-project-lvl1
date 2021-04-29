const MIN_NUMBER = 1;
const MAX_NUMBER = 50;

const getGcd = (x, y) => (y > 0 ? getGcd(y, x % y) : Math.abs(x));

const generateRound = (generateRandomInt) => {
  const firstValue = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondValue = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `${firstValue} ${secondValue}`;
  const answer = getGcd(firstValue, secondValue).toString();
  return [question, answer];
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  generateRound,
};
