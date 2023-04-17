/*

Prompt

Given a triangle array, return the minimum path sum from top to bottom. 
For each step, you may move to an adjacent number of the row below. 
More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row. 
For example, if given the following input:

[
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]

Here, the result is 11 because of the path 2 + 3 + 5 + 1.
*/
// Here's the recursive DFS implementation. We'll use
// extra row and column parameters with defaults to
// keep track of where we are.
function triangleLowestPath(triangle, row = 0, col = 0) {
  if (row >= triangle.length) return 0;

  const below = triangleLowestPath(triangle, row + 1, col);
  const next = triangleLowestPath(triangle, row + 1, col + 1);

  return triangle[row][col] + Math.min(below, next);
}

// And here is the iterative solution.
function triangleLowestPath(triangle) {
  // Start at the second row up from the bottom.
  for (let row = triangle.length - 2; row >= 0; row--) {
    // Walk through that row and add the small of the two
    // available options from the row below.
    for (let col = 0; col < triangle[row].length; col++) {
      triangle[row][col] += Math.min(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }

  // Now the lowest sum is at the top!
  return triangle[0][0];
}
