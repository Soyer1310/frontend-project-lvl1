import randomNumber from '../src/random-number.js';
import gcd from '../src/gcd.js';

export const task = 'Find the greatest common divisor of given numbers.';

export const getQuestion = () => {
  const question = `${randomNumber(1, 20)} ${randomNumber(1, 20)}`;
  return question;
};

export const getAnswer = (question) => {
  const operands = question.split(' ');
  const [x, y] = operands;
  const answer = gcd(x, y);
  return String(answer);
};
