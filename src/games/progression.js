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
const getProgression = (start, length, diff) => {
  const startArray = new Array(length).fill(start);
  return startArray.map((val, idx) => (val + idx * diff));
};

function progressionGame(getRandomInt) {
  const start = getRandomInt(MIN.START, MAX.START);
  const length = getRandomInt(MIN.LENGTH, MAX.LENGTH);
  const diff = getRandomInt(MIN.DIFF, MAX.DIFF);
  const position = getRandomInt(0, length);
  const progression = getProgression(start, length, diff);
  const correct = progression[position].toString();
  const changeForQuestion = (val, idx) => (idx === position ? '..' : val);
  const question = progression.map(changeForQuestion).join(' ');
  return [question, correct];
}

progressionGame.title = 'What number is missing in the progression?';

export default progressionGame;
