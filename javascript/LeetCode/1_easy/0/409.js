/**Longest Palindrome
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const counter = {};
  for (const ch of s) {
    counter[ch] = (counter[ch] || 0) + 1;
  }

  let total = 0;

  for (const key of Object.keys(counter)) {
    if (counter[key] % 2) {
      total--;
    }
    total += counter[key];
  }

  return total + (s.length !== total);
};
