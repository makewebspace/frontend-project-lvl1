function calcGame(getRandomInt) {
  const tokenList = ['+', '-', '*'];
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const first = getRandomInt(1, 10);
  const second = getRandomInt(1, 10);
  const token = tokenList[getRandomInt(0, 3)];
  const question = `${first} ${token} ${second}`;
  const correct = operations[token](first, second).toString();
  return [question, correct];
}

calcGame.title = 'What is the result of the expression?';

export default calcGame;
