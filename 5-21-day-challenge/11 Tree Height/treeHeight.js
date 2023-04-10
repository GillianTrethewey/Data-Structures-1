/*
Prompt

Given a binary tree, find the height, that is the length of the path 
from the root to the deepest leaf node.*/

/*
 * You may assume the node class is:
 * class TreeNode {
 *   constructor(value, left = null, right = null) {
 *     this.value = value;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */

function treeHeight(root) {
  // Base case
  if (root === null) {
    return 0;
  }

  // Try all possible branches (in a binary tree there are at most two)
  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);

  // Combine results from subproblems
  return 1 + Math.max(leftHeight, rightHeight);
}
