const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = (generateRandomInt) => {
  const leftOperand = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const rightOperand = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operands = Object.keys(operations);
  const position = generateRandomInt(0, operands.length);
  const operand = operands[position];
  const question = `${leftOperand} ${operand} ${rightOperand}`;
  const answer = operations[operand](leftOperand, rightOperand).toString();
  return [question, answer];
};

export default {
  description: 'What is the result of the expression?',
  generateRound,
};
