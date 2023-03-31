/*Prompt
Given a 2D rectangular matrix, return all of the values in a single, linear array in spiral order. Start at (0, 0) and first include everything in the first row. Then down the last column, back the last row (in reverse), and finally up the first column before turning right and continuing into the interior of the matrix.

 

For example:

 1  2  3  4
 5  6  7  8
 9 10 11 12
 13 14 15 16

Returns:
[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
*/

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function spiralTraversal(matrix) {
  let dim = matrix.flat(2).length ** 0.5;
  let count = 1;
  let leftPointer = 0;
  let rightPointer = dim - 1;
  let topPointer = 0;
  let bottomPointer = dim - 1;
  let results = [];
  while (count < dim ** 2) {
    for (let col = 0; col <= rightPointer; col++) {
      results.push(matrix[topPointer][col]);
      count++;
    }
    topPointer++;

    for (let row = topPointer; row <= bottomPointer; row++) {
      results.push(matrix[row][rightPointer]);
      count++;
    }
    rightPointer--;

    for (let col = rightPointer; col >= leftPointer; col--) {
      results.push(matrix[bottomPointer][col]);
      count++;
    }
    bottomPointer--;

    for (let row = bottomPointer; row >= topPointer; row--) {
      results.push(matrix[row][leftPointer]);
      count++;
    }
    leftPointer++;
  }
  return results;
}

console.log(spiralTraversal(matrix));
