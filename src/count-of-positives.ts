// Given an array of integers.
// Return an array, where the first element is the count of positives
// numbers and the second element is sum of negative numbers. 0 is neither
//  positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
// you should return [10, -65].

export function countPositivesSumNegatives(input: number[] | null): number[] {
  let countOfPositives: number = 0;
  let sumOfNegatives: number = 0;
  if (input === null) return [];

  for (let num of input) {
    if (num > 0) {
      countOfPositives += 1;
    }
    if (num < 0) {
      sumOfNegatives += num;
    }
  }

  if (countOfPositives === 0 && sumOfNegatives === 0) {
    return [];
  } else {
    return [countOfPositives, sumOfNegatives];
  }
}

export default countPositivesSumNegatives;
