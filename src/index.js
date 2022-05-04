import readlineSync from 'readline-sync';

export default (runRound, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = runRound();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    if (userAnswer === answer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
