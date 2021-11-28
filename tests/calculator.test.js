const { test, expect } = require('@jest/globals');
const { add, subtract } = require('../scripts/calculator');

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('50 + 26 = 76', () => {
  expect(add(50, 26)).toBe(76);
});

test('5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});
