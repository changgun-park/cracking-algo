/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(tree1, tree2) {
    if (!tree1 && !tree2) {
        return true;
    }
    
    if (tree1 && tree2) {
        return tree1.val === tree2.val && isSameTree(tree1.right, tree2.right) && isSameTree(tree1.left, tree2.left);
    }

    return false;
};