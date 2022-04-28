export default () => {
  const rand = 1 - 0.5 + Math.random() * (100 - 1 + 1);
  return Math.round(rand);
};
