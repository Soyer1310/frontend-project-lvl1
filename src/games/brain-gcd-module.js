import randomNumber from '../random-number.js';
import index from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const lesserNum = (num1 < num2) ? num1 : num2;

  for (let i = lesserNum; i >= 2; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const gameGCD = () => {
  const round = [];
  const question = `${randomNumber(1, 20)} ${randomNumber(1, 20)}`;
  const [x, y] = question.split(' ');
  const answer = String(gcd(x, y));
  round.push(question, answer);
  return round;
};

export default () => {
  index(gameGCD, task);
};
