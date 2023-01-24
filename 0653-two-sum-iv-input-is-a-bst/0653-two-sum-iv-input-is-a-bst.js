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
 * @param {number} k
 * @return {boolean}
 */


var findTarget = function(root, k) {
    let found = false;
    const map = new Map();

    const helper = (node) => {
        if (!node) return;
        helper(node.left);
        if (map.has(k - node.val)) found = true;
        map.set(node.val, true);
        helper(node.right);
    }

    helper(root);

    return found;
};