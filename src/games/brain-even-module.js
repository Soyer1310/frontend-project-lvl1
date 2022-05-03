import randomNumber from '../random-number.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestion = () => {
  const question = randomNumber(1, 100);
  return question;
};

export const getAnswer = (question) => {
  const correctAnswer = (question % 2) ? 'no' : 'yes';
  return correctAnswer;
};
