import countPositivesSumNegatives from './count-of-positives';

test('sum adds two numbers', () => {
  expect(countPositivesSumNegatives(4, 3)).toBe(7);
});

test('sum adds two numbers cancelling', () => {
  expect(countPositivesSumNegatives(-4, 4)).toBe(0);
});
