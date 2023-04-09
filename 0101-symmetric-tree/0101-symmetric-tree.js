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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root.left, root.right);
};

function isMirror (leftRoot, rightRoot) {
    if (!leftRoot && !rightRoot) return true;    

    if (leftRoot && rightRoot) {
        if (leftRoot.val !== rightRoot.val) return false;
        return isMirror(leftRoot.left, rightRoot.right) && isMirror(leftRoot.right, rightRoot.left);
    }

    return false;
}