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

// var reverseInGroupsOfK = function(head, k) {
//   let stack = [];
//   let newNode = new ListNode(-1);
//   let temp = newNode;

//   while(head) {
//       for(let i = 0; i < k && head; i++) {
//           stack.push(head);
//           head = head.next;
//       }

//       if(stack.length === k) {
//           while(stack.length > 0) {
//               temp.next = stack.pop();
//               temp = temp.next;
//           }
//           temp.next = head;
//       }
//   }
//   return newNode.next;
// };

function reverseInGroupsOfK(head, k) {
  // 0 and 1 length lists do not require reversing, no matter what k is.
  if (!head || !head.next || k === 1) return head;

  // We'll need two pointers so that we can make changes to
  // pointers without losing our position.
  let prev = head;
  let curr = prev.next;

  // This makes sure that the first node will point to null
  // when it is the last node after refersal.
  prev.next = null;

  // Now we'll count out k nodes to reverse.
  let last = prev;
  let count = 1;
  while (curr && count < k) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    count++;
  }

  // At this point we've reversed up to k nodes. If there
  // is anything left, reverse that and set as the next
  // node of the last of the current set.
  if (curr) {
    last.next = reverseInGroupsOfK(curr, k);
  }

  // Return the first node in this group of k.
  return prev;
}
console.log(reverseInGroupsOfK(head, 2));
