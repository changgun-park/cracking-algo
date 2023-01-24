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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let index = 0;
    let result = null;
    
    const dfs = (node) => {
        if (!node || result !== null) return;
        dfs(node.left);
        if (++index === k) result = node.val;
        dfs(node.right);
    }

    dfs(root)
    
    return result
    
};