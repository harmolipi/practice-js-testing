import caesarCipher from '../scripts/caesar-cipher';

test('shifts "hello world"', () => {
  expect(caesarCipher('hello world', 1)).toBe('ifmmp xpsme');
});

test('shifts capital letters ("I am Niko")', () => {
  expect(caesarCipher('I am Niko', 2)).toBe('K co Pkmq');
});

test(`doesn't affect punctuation ("Hi! What's your name?")`, () => {
  expect(caesarCipher(`Hi! What's your name?`, 5)).toBe(
    `Mn! Bmfy'x dtzw sfrj?`
  );
});

test('properly wraps end of alphabet to beginning ("XYZ xyz")', () => {
  expect(caesarCipher('XYZ xyz', 2)).toBe('ZAB zab');
});

test('works with a super high shift', () => {
  expect(caesarCipher('hello world', 100)).toBe('dahhk sknhz');
});
