import promptly from 'promptly';
import gameRunner from './index.js';

export default async (game) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name? ');

  console.log(`Hello, ${name}!`);

  const getAnswer = () => promptly.prompt('Your answer: ');
  const exitCode = await gameRunner(game, getAnswer);

  if (exitCode === 0) {
    console.log(`Congratulations, ${name}!`);
  }

  if (exitCode === 1) {
    console.log(`Let's try again, ${name}!`);
  }
};
