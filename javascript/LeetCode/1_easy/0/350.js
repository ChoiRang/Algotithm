/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const result = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else {
      j++;
    }
  }

  return result;
};
