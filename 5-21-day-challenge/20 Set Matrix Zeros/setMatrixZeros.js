/*

Prompt

Given a rectangular matrix of numbers, find any position that is set to a zero in the input and then replace all values on its row and column with zeros. This must be done in-place, modifying the input matrix, not allocating any new space.

 

For example:

1 2 3
4 5 6
7 8 0

Becomes:

1 2 0
4 5 0
0 0 0
*/

function setMatrixZeros(matrix) {
  // Remember which rows and columns we need to zero out.
  const rows = {};
  const columns = {};

  // Scan every position in the matrix and make note
  // of the rows and columns that contain at least one zero.
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rows[r] = true;
        columns[c] = true;
      }
    }
  }

  // Now go through the rows we need to zero.
  for (const row in rows) {
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0;
    }
  }

  // And finally the columns.
  for (const column in columns) {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][column] = 0;
    }
  }

  return matrix;
}
