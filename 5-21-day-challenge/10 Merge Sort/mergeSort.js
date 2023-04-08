/*Prompt

Implement merge sort on an array.
*/
function mergeSort(data) {
  if (data.length <= 1) return data;
  let mid = Math.floor(data.length / 2);

  let left = mergeSort(data.slice(0, mid));
  let right = mergeSort(data.slice(mid));

  function merge(left, right) {
    let joined = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        joined.push(left.shift());
      } else {
        joined.push(right.shift());
      }
    }
    return [...joined, ...left, ...right];
  }
  return merge(left, right);
}

console.log(mergeSort([5, 9, 2, 3, 1, 4]));
