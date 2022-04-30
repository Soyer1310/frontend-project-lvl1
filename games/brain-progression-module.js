import randomNumber from '../src/random-number.js';

export const task = 'What number is missing in the progression?';

export const getQuestion = () => {
  const progressionLength = randomNumber(5, 10);
  const progressionStep = randomNumber(1, 9);
  let nextNumber = randomNumber(1, 50);
  const hiddenNum = randomNumber(0, progressionLength - 1);
  const progressionSeries = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionSeries.push(nextNumber);
    nextNumber += progressionStep;
  }
  progressionSeries[hiddenNum] = '..';
  const progressionString = progressionSeries.join(' ');
  return progressionString;
};

export const getAnswer = (question) => {
  const series = question.split(' ');
  const hiddenPos = series.indexOf('..');
  let correctAnswer = null;
  if (hiddenPos >= 2) {
    correctAnswer = series[hiddenPos - 1] + (series[hiddenPos - 1] - series[hiddenPos - 2]);
  } else {
    correctAnswer = series[hiddenPos + 1] - (series[hiddenPos + 2] - series[hiddenPos + 1]);
  }
  return String(correctAnswer);
};
