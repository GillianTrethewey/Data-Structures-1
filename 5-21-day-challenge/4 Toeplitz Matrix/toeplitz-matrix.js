/*

Prompt
A Toeplitz Matrix is one where the values on every diagonal are the same: Given a 2d matrix (multidimensional array), return true if the input is a Toeplitz matrix and false otherwise.

 

Example of a valid Toeplitz matrix:

1 2 3 4
5 1 2 3
6 5 1 2
7 6 5 1


*/

// function isToeplitz(m) {

//   if (!m) return true

//   for (let i = 0; i < m.length-1; i++) {
//     for (let j = i; j < m[i].length-1; j++) {
//       if (m[i][j] != m[i+1][j+1]) return false;
//     }
//   }
//   return true;

// }

function isToeplitz(matrix) {
  // Here's that row-major traversal again, using two loops.
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const value = matrix[r][c];

      // Here, we're going to loop up and left at a position
      // diagonal from this one. Only do this if we're not going
      // to index outside of the matrix. Check if that value isn't
      // the same as this one.
      if (r > 0 && c > 0 && matrix[r - 1][c - 1] !== value) {
        return false;
      }
    }
  }

  // If we didn't find any problems, return true.
  return true;
}

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4],
  [7, 6, 1, 2, 3],
  [8, 7, 6, 1, 2],
  [9, 8, 7, 6, 1],
];

console.log(isToeplitz(matrix));
