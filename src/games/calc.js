const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function calcGame(getRandomInt) {
  const first = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const second = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const tokenList = Object.keys(operations);
  const tokenPosition = getRandomInt(0, tokenList.length);
  const token = tokenList[tokenPosition];
  const question = `${first} ${token} ${second}`;
  const correct = operations[token](first, second).toString();
  return [question, correct];
}

calcGame.title = 'What is the result of the expression?';

export default calcGame;
