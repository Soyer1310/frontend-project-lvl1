import genRandNum from '../random-number.js';
import runGame from '../index.js';

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

const genCalcRound = () => {
  const round = [];
  const operators = ['+', '-', '*'];
  const operator = operators[genRandNum(0, operators.length - 1)];
  const num1 = genRandNum(1, 100);
  const num2 = genRandNum(1, 100);
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calc(num1, num2, operator));
  round.push(question, answer);
  return round;
};

export default () => {
  runGame(genCalcRound, task);
};
