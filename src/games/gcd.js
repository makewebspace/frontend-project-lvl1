const MIN_NUMBER = 1;
const MAX_NUMBER = 50;
const gcd = (x, y) => (y > 0 ? gcd(y, x % y) : Math.abs(x));

function gcdGame(getRandomInt) {
  const first = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = `${first} ${second}`;
  const correct = gcd(first, second).toString();
  return [question, correct];
}

gcdGame.title = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
