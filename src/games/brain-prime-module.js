import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  if (question === 1 || question === 0) return false;
  for (let i = Math.ceil(question / 2); i > 1; i -= 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const genPrimeRound = () => {
  const round = [];
  const question = genRandNum(1, 101);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  round.push(question, answer);
  return round;
};

export default () => {
  runGame(genPrimeRound, task);
};
