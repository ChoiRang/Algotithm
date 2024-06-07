/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dictionary, sentence) {
  const words = sentence.split(" ");

  const result = words.map((word) => {
    dictionary.forEach((dict) => {
      if (word.startsWith(dict)) {
        word = dict;
      }
    });
    return word;
  });

  return result.join(" ");
};
