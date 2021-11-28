const caesarCipher = require('../scripts/caesar-cipher');

test('shifts "hello world"', () => {
  expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
});
