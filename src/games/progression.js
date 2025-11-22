import runEngine from '../index.js';

const description = '¿Qué número falta en la progresión?';

const progressionLength = 10;

/*
  Genera una progresión aritmética usando estrictamente esta fórmula:
  número = inicio + índice * paso
*/
const generateProgression = (start, step, length) => {
  const progression = [];

  for (let index = 0; index < length; index += 1) {
    const number = start + index * step; // Fórmula exacta
    progression.push(number);
  }

  return progression;
};

const generateRound = () => {
  const start = Math.floor(Math.random() * 20) + 1; // número inicial
  const step = Math.floor(Math.random() * 10) + 1; // paso de la progresión

  // Generamos la progresión siguiendo la fórmula
  const progression = generateProgression(start, step, progressionLength);

  // Elegir un índice aleatorio para ocultar
  const hiddenIndex = Math.floor(Math.random() * progressionLength);

  // Guardamos la respuesta correcta antes de ocultarla
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runEngine(description, generateRound);
};

export default runProgressionGame;
