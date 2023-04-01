/*
Given a linked list, reverse groups of k nodes. 
These groups will remain in order themselves. 
For example, if we perform this operation with k=2 on the following list:

1 -> 2 -> 3 -> 4-> 5

The result will be:

2 -> 1 -> 4 -> 3 -> 5

Once again, this should be done in-place, just re-assigning the next 
pointers in the nodes and returning the new head. 
The head parameter will be a list of some length (possibly zero) and k will be a positive integer.

*/

/*
 * You may assume the node class is:
 * class LLNode {
 *   constructor(value, next = null) {
 *     this.value = value;
 *     this.next = next;
 *   }
 * }
 */

let head = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// var reverseInGroupsOfK = function (head, k) {
//   let curr = head,
//     count = 0;
//   while (curr && count !== k) {
//     (curr = curr.next), count++;
//   }

//   if (count === k) {
//     curr = reverseInGroupsOfK(curr, k);
//     while (count-- > 0) {
//       let temp = head.next;
//       head.next = curr;
//       curr = head;
//       head = temp;
//     }
//     head = curr;
//   }
//   return head;
// };

var reverseInGroupsOfK = function(head, k) {
  let stack = [];
  let newNode = new ListNode(-1);
  let temp = newNode;
  
  while(head) {
      for(let i = 0; i < k && head; i++) {
          stack.push(head);
          head = head.next;
      }
      
      if(stack.length === k) {
          while(stack.length > 0) {
              temp.next = stack.pop();
              temp = temp.next;
          }
          temp.next = head;
      }
  }
  return newNode.next;
};
console.log(reverseInGroupsOfK(head, 2));
