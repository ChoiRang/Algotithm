/**Find Common Characters
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function (words) {
  const commons = countWord(words[0]);

  for (const word of words) {
    const counter = countWord(word);
    for (const key of Object.keys(commons)) {
      commons[key] = Math.min(commons[key], counter[key]);
    }
  }

  const result = [];
  for (const key of Object.keys(commons)) {
    if (commons[key]) {
      for (let i = 0; i < commons[key]; i++) {
        result.push(key);
      }
    }
  }

  return result;
};

const countWord = function (word) {
  const result = {};

  for (const ch of word) {
    result[ch] = (result[ch] || 0) + 1;
  }

  return result;
}
