import randomNumber from '../random-number.js';
import index from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => {
  if (question % 2 === 0) {
    return true;
  }
  return false;
};

const genEvenRules = () => {
  const raund = [];
  const question = randomNumber(1, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';
  raund.push(question, answer);
  return raund;
};

export default () => {
  index(genEvenRules, task);
};
