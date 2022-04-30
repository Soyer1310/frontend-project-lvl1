import randomNumber from '../src/random-number.js';

export const task = 'What is the result of the expression?';

export const getQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomNumber(0, 2)];
  const question = `${randomNumber(1, 100)} ${operator} ${randomNumber(1, 100)}`;
  return question;
};

export const getAnswer = (question) => {
  const questionArr = question.split(' ');
  const num1 = +questionArr[0];
  const num2 = +questionArr[2];
  const operator = questionArr[1];
  let answer = null;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      return null;
  }
  return String(answer);
};
