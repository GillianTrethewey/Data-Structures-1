/*
Prompt

Given a matrix that is monotonically increasing along all rows and columns, 
as well as a value, k, return true if the value exists in the matrix and false otherwise.

Example 1: returns true for 4

[[0, 0, 0, 1],
 [1, 1, 1, 2],
 [2, 3, 4, 5]]


*/

function findInMonotonic(matrix, k) {
  let arr = matrix.flat(2).sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return true;
    if (k < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

/*
Alternative without flat:

function findInMonotonic(matrix, k) {
  const nrows = matrix.length;
  if (nrows === 0) return false;


  // Start at a corner that is the end of one dimension
  // and start of another.
  let row = nrows - 1;
  let col = 0;
  const ncols = matrix[row].length;


  while (row >= 0 && col < ncols) {
    const value = matrix[row][col];
    if (value === k) {
      // We found the target value!
      return true;
    } else if (value < k) {
      // If the k is greater than this value, then it HAS
      // to be at least one column over.
      col++;
    } else {
      // If the k is less than this value, then it HAS
      // to be at least one row up.
      row--;
    }
  }


  return false;
}


*/

let matrix = [
  [0, 0, 0, 1],
  [1, 1, 1, 2],
  [2, 3, 4, 5],
];

console.log(findInMonotonic(matrix, 4));
