import randomNumber from '../src/random-number.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getQuestion = () => {
  const question = randomNumber(1, 101);
  return question;
};

export const getAnswer = (question) => {
  if (question === 1 || question === 0) return 'no';
  let correctAnswer = 'yes';
  for (let i = Math.ceil(question / 2); i > 1; i -= 1) {
    if (question % i === 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};
