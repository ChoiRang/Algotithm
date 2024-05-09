function solution(number) {
  let result = 0;

  for (let num = 0; num < number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      result += num;
    }
  }

  return result;
}
