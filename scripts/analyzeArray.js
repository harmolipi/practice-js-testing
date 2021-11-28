function analyzeArray(array) {
  return {
    average: array.reduce((sum, num) => sum + num) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyzeArray;
