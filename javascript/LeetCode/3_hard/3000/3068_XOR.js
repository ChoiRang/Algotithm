/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
const maximumValueSum = function (nums, k, edges) {
  const total = nums.reduce((prevSum, num) => prevSum + num);
  let totalDiff = 0;
  let count = 0;
  let minimumDiff = 10 ** 9 + 1;

  for (const num of nums) {
    const diff = (num ^ k) - num;

    if (diff > 0) {
      totalDiff += diff;
      count++;
    }
    minimumDiff = Math.min(minimumDiff, Math.abs(diff));
  }

  if (count % 2 === 1) {
    totalDiff -= minimumDiff;
  }

  return total + totalDiff;
};
