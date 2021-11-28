import reverseString from '../scripts/reverse-string';

test('reverses "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a sentence', () => {
  expect(reverseString('my name is Harmolipi')).toBe('ipilomraH si eman ym');
});
