import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  let result = null;
  switch (operator) {
    case '+':
      result = +num1 + +num2;
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

const genCalcRound = () => {
  const round = [];
  const operators = ['+', '-', '*'];
  const randomOperator = operators[genRandNum(0, operators.length - 1)];
  const question = `${genRandNum(1, 100)} ${randomOperator} ${genRandNum(1, 100)}`;
  const [num1, operator, num2] = question.split(' ');
  const answer = String(calc(num1, num2, operator));
  round.push(question, answer);
  return round;
};

export default () => {
  runGame(genCalcRound, task);
};
