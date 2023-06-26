import countPositivesSumNegatives from './count-of-positives';

test('testing some random numbers', () => {
  expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toStrictEqual([10, -65]);
});

test('sum adds two numbers cancelling', () => {
  expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toStrictEqual([8, -50]);
});
