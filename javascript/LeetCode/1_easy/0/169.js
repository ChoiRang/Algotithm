/**Majority Element
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const n = nums.length / 2;
  const counter = {};
  let maxCount = 0;
  let result = 0;

  for (const num of nums) {
      counter[num] = (counter[num] || 0) + 1;

      if (counter[num] > maxCount) {
          result = num;
          maxCount = counter[num];
      }
  }

  return result;
};
