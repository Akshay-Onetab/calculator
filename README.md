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
