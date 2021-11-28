const analyzeArray = require('../scripts/analyzeArray');

test('returns proper average', () => {
  expect(analyzeArray([3, 3]).average).toEqual(3);
});

test('returns proper min', () => {
  expect(analyzeArray([1, 5]).min).toEqual(1);
});

test('returns proper max', () => {
  expect(analyzeArray([1, 5]).max).toEqual(5);
});

test('returns proper length', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toEqual(5);
});

test('returns proper average, min, max, and length together', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('returns proper values for another, longer, array', () => {
  expect(analyzeArray([10, 2, 7, 4, 6, 5, 3, 8, 1, 9])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
});
