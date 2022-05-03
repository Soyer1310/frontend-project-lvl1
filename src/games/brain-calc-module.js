import randomNumber from '../random-number.js';
import index from '../index.js';

const task = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  let result = null;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
};

const genCalcRules = () => {
  const round = [];
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomNumber(0, operators.length - 1)];
  const question = `${randomNumber(1, 100)} ${randomOperator} ${randomNumber(1, 100)}`;
  const [num1, operator, num2] = question.split(' ');
  const answer = String(calc(num1, num2, operator));
  round.push(question, answer);
  return round;
};

export default () => {
  index(genCalcRules, task);
};
