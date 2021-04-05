const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const getRound = (generateRandomInt) => {
  const question = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default {
  title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound,
};
