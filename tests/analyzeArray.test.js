const analyzeArray = require('../scripts/analyzeArray');

test('returns proper average, min, max, and length', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
