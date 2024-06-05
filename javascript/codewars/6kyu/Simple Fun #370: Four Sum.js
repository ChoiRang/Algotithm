function fourSum(A, B, C, D) {
  const arrays = [A, B, C, D];

  function totalSums(sum, idx) {
    if (idx === 4) {
      return sum === 0 ? 1 : 0;
    }

    let result = 0;
    const visited = new Set();
    for (const num of arrays[idx]) {
      if (!visited.has(num)) {
        result += totalSums(sum + num, idx + 1);
        visited.add(num);
      }
    }

    return result;
  }

  return totalSums(0, 0);
}
