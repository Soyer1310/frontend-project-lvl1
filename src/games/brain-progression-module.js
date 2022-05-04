import genRandNum from '../random-number.js';
import runGame from '../index.js';

const task = 'What number is missing in the progression?';

const genProgression = () => {
  const progressionSeries = [];
  const progressionLength = genRandNum(5, 10);
  const progressionStep = genRandNum(1, 9);
  let nextNumber = genRandNum(1, 50);
  for (let i = 0; i < progressionLength; i += 1) {
    progressionSeries.push(nextNumber);
    nextNumber += progressionStep;
  }
  const hiddenNum = genRandNum(0, progressionLength - 1);
  progressionSeries[hiddenNum] = '..';
  const progressionString = progressionSeries.join(' ');
  return progressionString;
};

export const genProgressRound = () => {
  const round = [];
  const question = genProgression();
  const series = question.split(' ');
  const hiddenPos = series.indexOf('..');
  let answer = null;
  if (hiddenPos >= 2) {
    answer = +series[hiddenPos - 1] + (series[hiddenPos - 1] - series[hiddenPos - 2]);
  } else {
    answer = series[hiddenPos + 1] - (series[hiddenPos + 2] - series[hiddenPos + 1]);
  }
  round.push(question, String(answer));
  return round;
};

export default () => {
  runGame(genProgressRound, task);
};
