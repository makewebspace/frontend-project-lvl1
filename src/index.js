import { generateRandomInt } from './helpers.js';

const ROUNDS_COUNT = 3;

export default (game, userName, getUserAnswer, output) => {
  output(game.title);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = game.getRound(generateRandomInt);

    output(`Question: ${question}`);

    const userAnswer = getUserAnswer();

    if (userAnswer !== answer) {
      output(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      output(`Let's try again, ${userName}!`);
      return;
    }
    output('Correct!');
  }

  output(`Congratulations, ${userName}!`);
};
