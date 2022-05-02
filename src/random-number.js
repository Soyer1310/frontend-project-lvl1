const randomNumber = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand;
};

export default randomNumber;
