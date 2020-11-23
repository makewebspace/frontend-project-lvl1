import { getRandomInt } from './helpers.js';

const GAME_ROUNDS = 3;

export default async (game, userName, getAnswerByUser) => {
  if (!game) {
    return;
  }

  console.log(game.title);

  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const [question, correctAnswer] = game.getGameRound(getRandomInt);

    console.log(`Question: ${question}`);

    const answer = await getAnswerByUser();

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
