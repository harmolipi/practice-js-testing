const capitalize = require('../scripts/capitalize');

test('capitalizes "hello world"', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
