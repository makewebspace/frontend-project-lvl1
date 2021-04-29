const MIN = {
  START: 5,
  LENGTH: 5,
  DIFF: 2,
};
const MAX = {
  START: 30,
  LENGTH: 15,
  DIFF: 10,
};

const getProgression = (start, length, step) => {
  const startArray = new Array(length).fill(start);
  return startArray.map((val, idx) => (val + idx * step));
};

const hideElement = (progression, position) => {
  const toQuestion = (val, idx) => (idx === position ? '..' : val);
  return progression.map(toQuestion);
};

const generateRound = (generateRandomInt) => {
  const start = generateRandomInt(MIN.START, MAX.START);
  const length = generateRandomInt(MIN.LENGTH, MAX.LENGTH);
  const step = generateRandomInt(MIN.DIFF, MAX.DIFF);
  const progression = getProgression(start, length, step);
  const position = generateRandomInt(0, length);
  const answer = progression[position].toString();
  const question = hideElement(progression, position).join(' ');
  return [question, answer];
};

export default {
  description: 'What number is missing in the progression?',
  generateRound,
};
