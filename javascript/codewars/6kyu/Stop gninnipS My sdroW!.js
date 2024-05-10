function spinWords(string) {
  const strArr = string.split(" ");

  strArr.forEach((str, index) => {
    strArr[index] = reverse(str);
  });

  return strArr.join(" ");
}

function reverse(elem) {
  if (elem.length > 4) {
    return elem.split("").reverse().join("");
  }
  return elem;
}
