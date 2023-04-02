/*

Prompt
A Toeplitz Matrix is one where the values on every diagonal are the same: Given a 2d matrix (multidimensional array), return true if the input is a Toeplitz matrix and false otherwise.

 

Example of a valid Toeplitz matrix:

1 2 3 4
5 1 2 3
6 5 1 2
7 6 5 1


*/

function isToeplitz(m) {
  let n = m[0].length;
  let ideal = [];
  for (let i = 0; i < n; i++) {
    ideal.push(Array(n).fill(0));
  }
  let leftPointer = 0;
  let rightPointer = n - 1;
  let topPointer = 0;
  let bottomPointer = n - 1;

  for (let i = 0; i < n; i++) {
    for (let col = 0; col <= rightPointer; col++) {
      ideal[topPointer + i][col] = col + 1;
    }
  }

  ideal[topPointer + 1].unshift(n + 1);
  ideal[topPointer + 1].pop();

  for (let col = 0; col <= rightPointer; col++) {
    ideal[topPointer + 2][col] = col + 1;
  }
  ideal[topPointer + 2].unshift(n + 1);
  ideal[topPointer + 2].pop();
  ideal[topPointer + 2].unshift(n + 2);
  ideal[topPointer + 2].pop();

  for (let col = 0; col <= rightPointer; col++) {
    ideal[topPointer + 3][col] = col + 1;
  }
  ideal[topPointer + 3].unshift(n + 1);
  ideal[topPointer + 3].pop();
  ideal[topPointer + 3].unshift(n + 2);
  ideal[topPointer + 3].pop();
  ideal[topPointer + 3].unshift(n + 3);
  ideal[topPointer + 3].pop();

  for (let col = 0; col < n; col++) {
    ideal[topPointer + n - 1][col] = col + 1;
  }
  for (let i = 1; i < n; i++) {
    ideal[topPointer + n - 1].unshift(n + i);
    ideal[topPointer + n - 1].pop();
  }
  console.log(ideal);
}

let m = [
  [1, 2, 3, 4, 5],
  [6, 1, 2, 3, 4],
  [7, 6, 1, 2, 3],
  [8, 7, 6, 1, 2],
  [9, 8, 7, 6, 1],
];

console.log(isToeplitz(m));
