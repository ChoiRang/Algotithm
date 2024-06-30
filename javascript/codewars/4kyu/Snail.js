const snail = function (array) {
  const n = array.length;
  if (n === 1) {
    return array[0];
  }
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const snakeDirections = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const result = [];
  let x = 0;
  let y = 0;
  let count = 0;

  result.push(array[x][y]);
  visited[x][y] = 1;
  count++;
  while (count < n * n) {
    for (const [moveX, moveY] of snakeDirections) {
      while (count < n * n) {
        if (
          x + moveX > n - 1 ||
          x + moveX < 0 ||
          y + moveY > n - 1 ||
          y + moveY < 0 ||
          visited[x + moveX][y + moveY] === 1
        ) {
          break;
        } else {
          x += moveX;
          y += moveY;
          result.push(array[x][y]);
          visited[x][y] = 1;
          count++;
        }
      }
    }
  }
  return result;
};
