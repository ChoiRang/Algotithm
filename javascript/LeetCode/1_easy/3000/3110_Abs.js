/**Score of a String
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function (s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    result = result + Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }

  return result;
};
