import { add, subtract, multiply, divide } from '../calculator';

describe('calculator', () => {
  describe('positive numbers', () => {
    test('add', () => expect(add(2, 3)).toBe(5));
    test('subtract', () => expect(subtract(5, 3)).toBe(2));
    test('multiply', () => expect(multiply(4, 2)).toBe(8));
    test('divide', () => expect(divide(10, 2)).toBe(5));
  });

  describe('negative numbers', () => {
    test('add', () => expect(add(-2, -3)).toBe(-5));
    test('subtract', () => expect(subtract(-5, -3)).toBe(-2));
    test('multiply', () => expect(multiply(-4, 2)).toBe(-8));
    test('divide', () => expect(divide(-10, 2)).toBe(-5));
  });

  describe('floats', () => {
    test('add', () => expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10));
    test('subtract', () => expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10));
    test('multiply', () => expect(multiply(0.2, 0.1)).toBeCloseTo(0.02, 10));
    test('divide', () => expect(divide(0.3, 0.1)).toBeCloseTo(3, 10));
  });

  describe('large numbers', () => {
    const a = 1e12; // 1,000,000,000,000
    const b = 3e6;  // 3,000,000
    test('add', () => expect(add(a, b)).toBe(a + b));
    test('subtract', () => expect(subtract(a, b)).toBe(a - b));
    test('multiply', () => expect(multiply(1e9, 2e3)).toBe(2e12));
    test('divide', () => expect(divide(1e12, 1e6)).toBe(1e6));
  });

  describe('divide by zero', () => {
    test('throws', () => expect(() => divide(1, 0)).toThrow('Cannot divide by zero'));
  });
});
