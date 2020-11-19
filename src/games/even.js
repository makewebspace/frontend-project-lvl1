function evenGame(getRandomInt) {
  const question = getRandomInt(1, 100);
  const correct = question % 2 === 0 ? 'yes' : 'no';
  return [question, correct];
}

evenGame.title = 'Answer "yes" if the number is even, otherwise answer "no".';

export default evenGame;
