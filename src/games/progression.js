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

const getProgression = (start, length, step) => new Array(length)
  .fill(start)
  .map((val, idx) => (val + idx * step));

const generateRound = (generateNumber) => {
  const start = generateNumber(MIN.START, MAX.START);
  const length = generateNumber(MIN.LENGTH, MAX.LENGTH);
  const step = generateNumber(MIN.DIFF, MAX.DIFF);
  const progression = getProgression(start, length, step);
  const position = generateNumber(0, length);
  const answer = progression.splice(position, 1, '..').toString();
  const question = progression.join(' ');
  return [question, answer];
};

export default {
  description: 'What number is missing in the progression?',
  generateRound,
};
