/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  const graph = Object.create(null);
  const result = [];

  for (const [start, end] of tickets) {
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
  }

  for (const start of Object.keys(graph)) {
    graph[start].sort((a, b) => a.localeCompare(b)).reverse();
  }

  function dfs(start) {
    while (graph[start]?.length > 0) {
      dfs(graph[start].pop());
    }
    result.push(start);
  }

  dfs("JFK");

  return result.reverse();
};
