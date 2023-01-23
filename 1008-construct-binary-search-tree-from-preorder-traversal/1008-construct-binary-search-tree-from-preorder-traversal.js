/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

const findIndexOfLarge = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) return i;
    }
    return arr.length;
}

var bstFromPreorder = function(preorder) {
    
    if (preorder.length === 0) return null;

    const root = new TreeNode(preorder[0]);

    const pivot = findIndexOfLarge(preorder);
    
    root.left =  bstFromPreorder(preorder.slice(1, pivot));
    
    root.right = bstFromPreorder(preorder.slice(pivot));
    
    
    return root;
};