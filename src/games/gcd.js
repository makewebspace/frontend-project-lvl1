const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const gcd = (x, y) => (y > 0 ? gcd(y, x % y) : Math.abs(x));

const getGameRound = (getRandomInt) => {
  const first = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `${first} ${second}`;
  const correct = gcd(first, second).toString();
  return [question, correct];
};

export default {
  title: 'Find the greatest common divisor of given numbers.',
  getGameRound,
};
