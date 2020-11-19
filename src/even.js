const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default async (getAnswer = () => Promise.resolve()) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);

    console.log(`Question: ${number}`);

    const correct = number % 2 === 0 ? 'yes' : 'no';
    const answer = await getAnswer();

    if (correct === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      return 0;
    }
  }

  return 1;
};
