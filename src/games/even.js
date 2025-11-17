import runEngine from '../index.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const number = Math.floor(Math.random() * 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => runEngine(description, makeRound);

export default runEvenGame;
