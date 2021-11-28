const { test, expect } = require('@jest/globals');
const { add, subtract, divide, multiply } = require('../scripts/calculator');

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('50 + 26 = 76', () => {
  expect(add(50, 26)).toBe(76);
});

test('5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('25 - 7 = 18', () => {
  expect(subtract(25, 7)).toBe(18);
});

test('25 / 5 = 5', () => {
  expect(divide(25, 5)).toBe(5);
});

test('12 / 4 = 3', () => {
  expect(divide(12, 4)).toBe(3);
});

test('4 * 2 = 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

test('12 * 2 = 24', () => {
  expect(multiply(12, 2)).toBe(24);
});
