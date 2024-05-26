/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function (root, target) {
  function dfs(node) {
    if (node.left && dfs(node.left)) {
      node.left = null;
    }
    if (node.right && dfs(node.right)) {
      node.right = null;
    }

    if (node.val === target && !(node.left || node.right)) {
      return true;
    } else {
      return false;
    }
  }

  dfs(root);

  if (root.val === target && !(root.left || root.right)) {
    root = null;
  }

  return root;
};
