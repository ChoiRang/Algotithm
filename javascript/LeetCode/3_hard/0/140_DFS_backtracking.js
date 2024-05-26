/**Word Break 2
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
	const words = [];
	const result = [];

	function dfs(start) {
		if (start === s.length) {
			result.push(words.join(" "));
		}

		for (let right = start; right < s.length; right++) {
			const word = s.substring(start, right + 1);
			if (wordDict.includes(word)) {
				words.push(word);
				dfs(right + 1);
				words.pop();
			}
		}
	}

	dfs(0);

	return result;
};
