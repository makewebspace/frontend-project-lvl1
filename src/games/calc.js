const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameRound = (getRandomInt) => {
  const first = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const tokens = Object.keys(operations);
  const tokenPosition = getRandomInt(0, tokens.length);
  const token = tokens[tokenPosition];
  const question = `${first} ${token} ${second}`;
  const correct = operations[token](first, second).toString();
  return [question, correct];
};

export default {
  title: 'What is the result of the expression?',
  getGameRound,
};
