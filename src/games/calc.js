const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRound = (generateRandomInt) => {
  const first = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const tokens = Object.keys(operations);
  const position = generateRandomInt(0, tokens.length);
  const token = tokens[position];
  const question = `${first} ${token} ${second}`;
  const answer = operations[token](first, second).toString();
  return [question, answer];
};

export default {
  title: 'What is the result of the expression?',
  getRound,
};
