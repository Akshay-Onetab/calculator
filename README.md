# calculator
Calculator project

## Quickstart

- Install:
  - npm: npm install
- Build:
  - npm run build
- Test:
  - npm test

## Usage

- ESM
  - import { add, subtract, multiply, divide } from 'calculator';
  - const sum = add(2, 3);
  - const diff = subtract(5, 2);
  - const prod = multiply(4, 6);
  - const quotient = divide(10, 2);

- CommonJS
  - const { add, subtract, multiply, divide } = require('calculator');
  - const sum = add(2, 3);
  - const diff = subtract(5, 2);
  - const prod = multiply(4, 6);
  - const quotient = divide(10, 2);

- ESM (TypeScript via ts-node)
  - Run directly with ts-node (Node 18+):
    - npx ts-node --esm -e "import { add, subtract, multiply, divide } from 'calculator'; console.log(add(2, 3), subtract(5, 2), multiply(4, 6), divide(10, 2));"

- ESM (using built dist)
  - After building, import from the compiled output:
    - import { add, subtract, multiply, divide } from './dist/index.js';

- CommonJS (via ts-node/register)
  - Execute TypeScript in Node using ts-node/register:
    - node -r ts-node/register -e "const { add, subtract, multiply, divide } = require('calculator'); console.log(add(2, 3), subtract(5, 2), multiply(4, 6), divide(10, 2));"

- CommonJS (using built dist)
  - Require the compiled output after build:
    - const { add, subtract, multiply, divide } = require('./dist/index.cjs'); // or './dist/index.js' depending on build config

## API Reference

- add(a: number, b: number): number
  - Returns the sum of a and b.

- subtract(a: number, b: number): number
  - Returns the result of a minus b.

- multiply(a: number, b: number): number
  - Returns the product of a and b.

- divide(a: number, b: number): number
  - Returns the result of a divided by b.
  - Throws Error('Cannot divide by zero') when b is 0 or -0.
