/*Prompt

Implement binary search on an array. Return the index of the value if found and -1 otherwise.
*/
function binarySearch(data, k) {
  let index = -1;

  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (data[mid] === k) {
      index = mid;
      return index;
    }

    if (k < data[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
/*
Alternative:


It’s very natural for many people to try to implement this with inclusive start and end indices. 
The best answer (at least for languages that use 0-based indexing for arrays) turns out to be an 
inclusive start and an exclusive end. 
This leaves only one place in the code where I need to add one. Under more careful inspection, this 
single plus one isn’t really even a fudge factor. 
Remember since we want the start to be inclusive, we’re moving past the value we already know isn’t the target. 
It’s not correcting index math, it’s making an explicit move based 
on what we know about the possible location of the target.

function binarySearch(data, k) {
  // Inclusive starting index
  let start = 0;
  // Exclusive ending index
  let end = data.length;


  // The algorithm continues until we find what we're
  // looking for OR we run out of places to look. If
  // end greater than start, then we have at least one
  // more place to check.
  while (start < end) {
    // Look in the middle between the start and end.
    const mid = Math.floor((start + end) / 2);
    const value = data[mid];


    if (value === k) {
      return mid;
    } else if (value < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return -1;
}
*/
