function pigIt(str) {
  const result = [];
  str.split(" ").forEach((elem) => result.push(latinAdd(elem)));

  return result.join(" ");
}

function latinAdd(str) {
  const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  if (!punctuation.includes(str)) {
    return str.slice(1) + str[0] + "ay";
  }

  return str;
}
