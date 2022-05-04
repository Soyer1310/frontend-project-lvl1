import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const calcGCD = (num1, num2) => {
  const lesserNum = (num1 < num2) ? num1 : num2;

  for (let i = lesserNum; i >= 2; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const genGCDRound = () => {
  const num1 = genRandNum(1, 20);
  const num2 = genRandNum(1, 20);
  const question = `${num1} ${num2}`;
  const answer = String(calcGCD(num1, num2));
  return [question, answer];
};

export default () => {
  runGame(genGCDRound, task);
};
