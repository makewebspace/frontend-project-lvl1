import readlineSync from 'readline-sync';
import start from './index.js';

export default (game) => {
  const input = (msg) => readlineSync.question(msg);
  const output = (msg) => console.log(msg);
  start(game, input, output);
};
