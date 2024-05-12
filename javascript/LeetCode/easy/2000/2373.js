/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
const largestLocal = function (grid) {
  const n = grid.length;
  const result = [];

  for (let i = 0; i < n - 2; i++) {
    const row = [];
    for (let j = 0; j < n - 2; j++) {
      row.push(getMaxValue(i, j, grid));
    }
    result.push(row);
  }

  return result;
};

const getMaxValue = function (startCol, startRow, grid) {
  let maxValue = 0;

  for (let i = startCol; i < startCol + 3; i++) {
    for (let j = startRow; j < startRow + 3; j++) {
      maxValue = Math.max(maxValue, grid[i][j]);
    }
  }

  return maxValue;
};
