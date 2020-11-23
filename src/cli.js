import promptly from 'promptly';
import runGame from './index.js';

export default async (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = await promptly.prompt('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  const getAnswerByUser = () => promptly.prompt('Your answer: ');

  await runGame(game, userName, getAnswerByUser);
};
