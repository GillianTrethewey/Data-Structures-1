//You may assume the node class is:
// class LLNode {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function deleteMiddleNode(head) {
  let count = 0;
  let current = head;
  while (current) {
    current = current.next;
    count++;
  }
  console.log(count);
  let index = Math.ceil(count / 2);
  if ((count / 2) % 2 === 0) {
    index = count + 1;
  }
  console.log(index);
  count = 0;
  current = head;
  prev = head;
  while (current) {
    count++;
    if (index === count) {
      console.log("head: ", head);
      prev.next = prev.next.next;
      console.log("removed: ", head);
      return head;
    }
    prev = current;
    current = current.next;
  }
}
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };

console.log(head);
console.log(deleteMiddleNode(head));
