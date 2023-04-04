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

let matrix = [
  [0, 0, 0, 1],
  [1, 1, 1, 2],
  [2, 3, 4, 5],
];

console.log(findInMonotonic(matrix, 4));
