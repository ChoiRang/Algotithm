function moveZeros(arr) {
  const result = [];

  arr.forEach((elem) => {
    if (elem !== 0) {
      result.push(elem);
    }
  });

  return arrayPadEnd(result, arr.length);
}

function arrayPadEnd(arr, n) {
  for (let i = 0; n - arr.length; i++) {
    arr.push(0);
  }

  return arr;
}
