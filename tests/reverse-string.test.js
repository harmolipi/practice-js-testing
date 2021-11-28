const { test, expect } = require('@jest/globals');
const reverseString = require('../scripts/reverse-string');

test('reverses "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});
