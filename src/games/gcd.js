const gcd = (x, y) => (y > 0 ? gcd(y, x % y) : Math.abs(x));

function gcdGame(getRandomInt) {
  const first = getRandomInt(0, 50);
  const second = getRandomInt(0, 50);
  const question = `${first} ${second}`;
  const correct = gcd(first, second).toString();
  return [question, correct];
}

gcdGame.title = 'Find the greatest common divisor of given numbers.';

export default gcdGame;
