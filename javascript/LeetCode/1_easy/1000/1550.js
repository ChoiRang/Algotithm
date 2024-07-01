/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
  let count = 0;

  const result = arr.some((elem) => {
      if (elem % 2 === 1) {
          count++;
      } else {
          count = 0;
      }

      if (count === 3) {
          return true
      }
  });

  return result;
};
