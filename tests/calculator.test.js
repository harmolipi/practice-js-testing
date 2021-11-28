const { test } = require('@jest/globals');
const add = require('../scripts/calculator');

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});
