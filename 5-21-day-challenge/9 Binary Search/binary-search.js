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
