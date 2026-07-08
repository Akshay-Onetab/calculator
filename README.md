# calculator

Calculator project

## Calculator Module

A simple, type-safe calculator utility implemented in TypeScript. It provides basic arithmetic operations: add, subtract, multiply, and divide (with a divide-by-zero guard).

### Installation

- Install dependencies:
  npm install

### Build

- Compile TypeScript to JavaScript:
  npm run build

### Test

- Run unit tests with Jest:
  npm test

### Usage (TypeScript)

Import the functions from the module:

import { add, subtract, multiply, divide } from "./src/calculator";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(2, 4)); // 8
console.log(divide(10, 2)); // 5

// divide-by-zero throws
try {
  divide(1, 0);
} catch (e) {
  console.error(e); // Error: Cannot divide by zero
}
