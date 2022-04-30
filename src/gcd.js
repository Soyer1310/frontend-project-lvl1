export default (num1, num2) => {
  const lesserNum = (num1 < num2) ? num1 : num2;

  for (let i = lesserNum; i >= 2; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};
