export const generateRandomCapitalLetter = () => {
  // ASCII code for capital letters: A (65) to Z (90)
  const randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  const randomCapitalLetter = String.fromCharCode(randomCharCode);
  return randomCapitalLetter;
};
