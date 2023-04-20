/*

Prompt
This problem takes two arrays of points as input. 
Each entry in the queens array is an (x, y) pair on a chessboard 
where a queen is located. There are no other pieces on the board. 

Each of the points in the positions array also an (x, y) of a 
square that is currently empty.

Return a new array of length equal to that of the positions 
array. Each entry is a boolean value that is true if that position is safe from attack.

Remember any of the queens can attack along vertical, horizontal, and 
diagonal directions and any number of spaces. 
The board is rectangular and is large enough for all of the queens and positions to be valid.
*/

function arePositionsSafe(queens, positions) {
  // Initialize sets for each axis of potential attack.
  const rows = new Set();
  const columns = new Set();
  const posDiagonals = new Set();
  const negDiagonals = new Set();

  // For each queen position (row, col), remember which axes
  // it can attack along.
  for (const [row, col] of queens) {
    // For the horizontal and vertical axes, we can just
    // remember the row and column index.
    rows.add(row);
    columns.add(col);
    // We'll remember the diagonals based on where that line
    // crosses the Y-axis.
    posDiagonals.add(col - row);
    negDiagonals.add(row + col);
  }

  const output = [];

  // Now scan through the positions and set the value in the output
  // array. A position is safe if it's axes weren't marked in the
  // first pass.
  for (const [row, col] of positions) {
    const mayBeAttacked =
      rows.has(row) ||
      columns.has(col) ||
      posDiagonals.has(col - row) ||
      negDiagonals.has(row + col);

    output.push(!mayBeAttacked);
  }

  return output;
}
