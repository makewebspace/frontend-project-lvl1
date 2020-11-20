const getProgression = (start, length, diff) => {
  const startArray = new Array(length).fill(start);
  return startArray.map((val, idx) => (val + idx * diff));
};

function progressionGame(getRandomInt) {
  const start = getRandomInt(5, 30);
  const length = getRandomInt(5, 15);
  const diff = getRandomInt(2, 10);
  const position = getRandomInt(0, length);
  const progression = getProgression(start, length, diff);
  const correct = progression[position].toString();
  progression[position] = '..';
  const question = progression.join(' ');
  return [question, correct];
}

progressionGame.title = 'What number is missing in the progression?';

export default progressionGame;
