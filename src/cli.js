import readlineSync from 'readline-sync';
import start from './index.js';

export default (game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  const getUserAnswer = () => readlineSync.question('Your answer: ');
  const output = (msg) => console.log(msg);

  start(game, userName, getUserAnswer, output);
};
