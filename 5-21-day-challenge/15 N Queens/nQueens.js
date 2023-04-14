/*

Prompt

Given an N*N board, place N queens on the board such that none can attack each other. 
A queen can move an unlimited number of spaces in any direction: horizontal, vertical, or diagonal. 
Return an N*N matrix of ‘.’ and ‘Q’ characters, a ‘Q’ where ever a queen is positioned.

  */
function nQueens(n) {
  /*
  
  Key Insights
    - We can only place one queen per row
    - We can only place one queen per column
    - We can only place one queen per diagonal
  
  */

  const finalBoard = [];

  // Build final board arrangement for any given solution
  function buildArrangement(board) {
    const formatted = new Array(board.length);
    for (let i = 0; i < board.length; i++) {
      let col = board[i].join("");
      formatted[i] = col;
    }

    return formatted;
  }

  // Define helper to place queens on board
  function placeQueen(
    board,
    cols,
    diagonals,
    antiDiagonals,
    row,
    col,
    currentDiagonal,
    currentAntiDiagonal
  ) {
    cols.add(col);
    diagonals.add(currentDiagonal);
    antiDiagonals.add(currentAntiDiagonal);
    board[row][col] = "Q";
  }

  // Define helper to remove queens from board
  function removeQueen(
    board,
    cols,
    diagonals,
    antiDiagonals,
    row,
    col,
    currentDiagonal,
    currentAntiDiagonal
  ) {
    cols.delete(col);
    diagonals.delete(currentDiagonal);
    antiDiagonals.delete(currentAntiDiagonal);
    board[row][col] = ".";
  }

  // Our main helper for discovering possible board combinations (backtracking when all possibilities are exhausted
  function backtrack(row, diagonals, antiDiagonals, cols, board) {
    // Base case (n queens place)
    if (row === n) {
      finalBoard.push(buildArrangement(board));
      return;
    }

    for (let col = 0; col < n; col++) {
      // Compute diagonal, anti/reverse diagonal
      let currentDiagonal = row - col;
      let currentAntiDiagonal = row + col;

      // Check sets for existing/conflicting placement
      if (
        cols.has(col) ||
        diagonals.has(currentDiagonal) ||
        antiDiagonals.has(currentAntiDiagonal)
      )
        continue;

      // Add queen placement
      placeQueen(
        board,
        cols,
        diagonals,
        antiDiagonals,
        row,
        col,
        currentDiagonal,
        currentAntiDiagonal
      );

      // Run helper recursively on next row
      backtrack(row + 1, diagonals, antiDiagonals, cols, board);

      // Remove the queen from our board after exploring all valid paths recursively
      removeQueen(
        board,
        cols,
        diagonals,
        antiDiagonals,
        row,
        col,
        currentDiagonal,
        currentAntiDiagonal
      );
    }
  }

  // Define starting (empty) board
  const board = new Array(n).fill().map((_) => new Array(n).fill("."));

  // Define starting parameters
  const params = [0, new Set(), new Set(), new Set(), board];

  // Run backtracking helper
  backtrack(...params);

  // Return combinations
  return finalBoard;
}
