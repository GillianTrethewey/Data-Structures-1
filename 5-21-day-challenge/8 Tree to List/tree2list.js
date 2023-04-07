/*

Prompt

Given a binary tree, convert this to a doubly linked list in the order of the i
n-order traversal. This operation should be done in place, not creating any 
new data structure. You must re-use the node's left pointer as the pointer 
to the previous node in the list and the right pointer should be the next node in the list.


At the end, return a pointer the first node in the list.

 /*
  * You may assume the node class is:
  * class Node {
  *   constructor(value, left = null, right = null) {
  *     this.value = value;
  *     this.left = left;
  *     this.right = right;
  *   }
  * }
  */
 function tree2list(root) {
  /* your code here */
}
*/
// Either need a helper function or a default parameter to pass
// in the tail of the list. Start out with an empty list, so null.
function tree2list(root, listTail = null) {
  if (!root) return listTail;


  // First, we're looking for the last node, so we're going
  // as far right as we can.
  if (root.right) {
    listTail = tree2list(root.right, listTail);
  }


  // If there is no right node, then this is the last one
  // in the in-order traversal, so prepend that to the tail
  // of the list and that node is now the head.
  let listHead = root;
  listHead.right = listTail;
  if (listTail) {
    listTail.left = listHead;
  }


  // Now look at the left subtree and pass in the list
  // we've created so far.
  if (root.left) {
    listHead = tree2list(root.left, listHead);
  }


  // Return the list as we've built it up to this point.
  return listHead;
}