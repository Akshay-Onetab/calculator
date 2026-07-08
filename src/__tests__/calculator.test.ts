import { add, subtract, multiply, divide } from "../calculator";

describe("calculator", () => {
  test("adds positive integers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  test("subtracts with negatives", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-5, -3)).toBe(-2);
    expect(subtract(-5, 3)).toBe(-8);
  });

  test("multiplies numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(-2, -3)).toBe(6);
  });

  test("divides numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, 3)).toBe(-2);
    expect(divide(-6, -3)).toBe(2);
  });

  test("floating point operations", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10);
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2, 10);
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 10);
    expect(divide(0.3, 0.1)).toBeCloseTo(3, 10);
  });

  test("large numbers", () => {
    const big = Number.MAX_SAFE_INTEGER - 10;
    expect(add(big, 5)).toBe(big + 5);
    expect(subtract(big, 5)).toBe(big - 5);
    expect(multiply(1e10, 3)).toBe(3e10);
    expect(divide(1e12, 1e6)).toBe(1e6);
  });

  test("throws on divide by zero", () => {
    expect(() => divide(1, 0)).toThrowError(/divide by zero/i);
  });
});
