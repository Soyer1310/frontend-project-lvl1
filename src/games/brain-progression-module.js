import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';

const genProgression = (length, step, first, hidden) => {
  const progressionSeries = [];
  let nextNumber = first;
  for (let i = 0; i < length; i += 1) {
    progressionSeries.push(nextNumber);
    nextNumber += step;
  }
  progressionSeries[hidden] = '..';
  const progressionString = progressionSeries.join(' ');
  return progressionString;
};

export const genProgressRound = () => {
  const progressionLength = genRandNum(5, 10);
  const progressionStep = genRandNum(1, 9);
  const firstNum = genRandNum(1, 50);
  const hiddenPos = genRandNum(0, progressionLength - 1);
  const question = genProgression(progressionLength, progressionStep, firstNum, hiddenPos);
  const answer = String(firstNum + (progressionStep * hiddenPos));
  return [question, answer];
};

export default () => {
  runGame(genProgressRound, task);
};
