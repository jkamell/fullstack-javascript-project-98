import runEngine from '../index.js';

const description = 'Encuentra el máximo común divisor de los números dados.';

// Algoritmo para calcular el MCD
const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

const runGcdGame = () => {
  runEngine(description, generateRound);
};

export default runGcdGame;
