const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const gcd = (x, y) => (y > 0 ? gcd(y, x % y) : Math.abs(x));

const getRound = (generateRandomInt) => {
  const first = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `${first} ${second}`;
  const answer = gcd(first, second).toString();
  return [question, answer];
};

export default {
  title: 'Find the greatest common divisor of given numbers.',
  getRound,
};
