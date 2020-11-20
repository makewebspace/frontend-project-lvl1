import promptly from 'promptly';
import gameRunner, { EXIT_CODE } from './index.js';

export default async (game) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const getAnswer = () => promptly.prompt('Your answer: ');
  const exitCode = await gameRunner(game, getAnswer);

  if (exitCode === EXIT_CODE.SUCCESS) {
    console.log(`Congratulations, ${name}!`);
  }

  if (exitCode === EXIT_CODE.WRONG) {
    console.log(`Let's try again, ${name}!`);
  }
};
