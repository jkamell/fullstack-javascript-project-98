📘 Brain Games — Proyecto de Hexlet / Códica

Colección de mini-juegos de consola desarrollados como parte del programa Fullstack JavaScript.
Cada juego pone a prueba una habilidad lógica distinta: paridad, cálculo, máximo común divisor, progresiones aritméticas y números primos.

El proyecto incluye:
Arquitectura modular
CLI ejecutable con npm link
Estándares de código con ESLint
Pruebas automáticas
Asciinemas demostrando el funcionamiento paso a paso


✔️ Estado del Proyecto
Hexlet tests and linter status:

[![Actions Status](https://github.com/jkamell/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/jkamell/fullstack-javascript-project-98/actions)

[![Maintainability](https://qlty.sh/gh/jkamell/projects/fullstack-javascript-project-98/maintainability.svg)](https://qlty.sh/gh/jkamell/projects/fullstack-javascript-project-98)


🎮 Descripción de los juegos

1️⃣ brain-even — ¿Es par?
Responde yes si el número es par, de lo contrario no.

2️⃣ brain-calc — Calculadora
Resuelve operaciones aleatorias: suma, resta y multiplicación.

3️⃣ brain-gcd — Máximo común divisor
Encuentra el mayor número que divide a dos enteros sin residuo.

4️⃣ brain-progression — Progresión aritmética
Completa el número faltante dentro de una secuencia.

5️⃣ brain-prime — ¿Es primo?
Responde yes si el número es primo, no si no lo es.


📦 Instalación

Clona el repositorio:
git clone https://github.com/jkamell/fullstack-javascript-project-98.git
cd fullstack-javascript-project-98

Instala dependencias:
npm install

Crea los ejecutables locales:
npm link


▶️ Cómo ejecutar los juegos

brain-even
brain-calc
brain-gcd
brain-progression
brain-prime

Cada juego requiere 3 respuestas correctas para ganar.

🎬 Asciinema — Demostraciones de Cada Paso
Paso 5
[![Demo](https://asciinema.org/a/3Jf0vjuz0A1vuNnxaTu3Dv1dM.svg)](https://asciinema.org/a/3Jf0vjuz0A1vuNnxaTu3Dv1dM)

Paso 6
[![Demo](https://asciinema.org/a/Ro9A4A5454hd2xZZcsjefJ1w9.svg)](https://asciinema.org/a/Ro9A4A5454hd2xZZcsjefJ1w9)

Paso 7
[![Demo](https://asciinema.org/a/320VvR3DhpT6EjVIvwlBaziax.svg)](https://asciinema.org/a/320VvR3DhpT6EjVIvwlBaziax)

Paso 8
[![Demo](https://asciinema.org/a/iHtY59JLPsZDFDuPncOKd8E6i.svg)](https://asciinema.org/a/iHtY59JLPsZDFDuPncOKd8E6i)

Paso 9
[![Demo](https://asciinema.org/a/xPk32NYcpWoAKnWHp8zVcuokO.svg)](https://asciinema.org/a/xPk32NYcpWoAKnWHp8zVcuokO)


📁 Estructura del Proyecto
.
├── bin/                     # Ejecutables CLI
│   ├── brain-even.js
│   ├── brain-calc.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   └── brain-prime.js
│
├── src/
│   ├── index.js             # Motor general
│   └── games/
│       ├── even.js
│       ├── calc.js
│       ├── gcd.js
│       ├── progression.js
│       └── prime.js
│
├── package.json
└── README.md

✅ Proyecto realizado como parte del programa Fullstack JavaScript (Hexlet / Códica)

