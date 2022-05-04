import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => {
  if (question % 2 === 0) {
    return true;
  }
  return false;
};

const genEvenRound = () => {
  const question = genRandNum(1, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runGame(genEvenRound, task);
};
