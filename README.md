# Calculator Module

This repository provides a simple TypeScript calculator module with four basic operations: add, subtract, multiply, and divide.

Installation and scripts:
- Install dependencies: npm install
- Run tests: npm test
- Build: npm run build (outputs to dist/)

Usage (after build):
```ts
import { add, subtract, multiply, divide } from './dist/calculator';

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2
console.log(multiply(4, 2)); // 8
console.log(divide(10, 2)); // 5

// divide by zero throws
try {
  divide(1, 0);
} catch (e) {
  console.error((e as Error).message); // "Cannot divide by zero"
}
```

During development (TypeScript directly via ts-jest in tests):
```ts
import { add } from './src/calculator';
``` 
