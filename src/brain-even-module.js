import readlineSync from 'readline-sync';
import randomNumber from './random-number.js';
import askName from './cli.js';

export default () => {
  const userName = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const min = 1;
    const max = 100;
    let correctAnswer = 'yes';
    const number = randomNumber(min, max);
    if (number % 2) correctAnswer = 'no';
    const userUnswer = readlineSync.question(`Question: ${number} `);
    if (userUnswer === correctAnswer) {
      console.log(`Your answer: ${userUnswer}`);
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userUnswer}`);
      console.log(`'${userUnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
