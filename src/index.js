import readlineSync from 'readline-sync';

export default (task, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const taskQuestion = getQuestion();
    const correctAnswer = getAnswer(taskQuestion);
    const userAnswer = readlineSync.question(`Question: ${taskQuestion} `);
    if (userAnswer === correctAnswer) {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
