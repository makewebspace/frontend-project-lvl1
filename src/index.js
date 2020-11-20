const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const EXIT_CODE = {
  SUCCESS: 0,
  WRONG: 1,
  ERROR: 2,
};

export default async (game, getAnswer) => {
  if (typeof game !== 'function') {
    return EXIT_CODE.ERROR;
  }

  console.log(game.title);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game(getRandomInt);

    console.log(`Question: ${question}`);

    const answer = await getAnswer();

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return EXIT_CODE.WRONG;
    }
  }

  return EXIT_CODE.SUCCESS;
};
