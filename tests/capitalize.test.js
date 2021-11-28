import capitalize from '../scripts/capitalize';

test('capitalizes "hello world"', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('nothing changes if already capitalized', () => {
  expect(capitalize('Harmolipi')).toBe('Harmolipi');
});
