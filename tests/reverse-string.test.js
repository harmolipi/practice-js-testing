const { test, expect } = require('@jest/globals');
const reverseString = require('../scripts/reverse-string');

test('reverses "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a sentence', () => {
  expect(reverseString('my name is Harmolipi')).toBe('ipilomraH si eman ym');
});
