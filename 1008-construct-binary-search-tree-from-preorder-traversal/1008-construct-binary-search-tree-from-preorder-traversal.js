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

var bstFromPreorder = function(preorder) {

    let root = new TreeNode(preorder[0]);

    for (i = 1; i < preorder.length; i++) {
        root = insert(root, preorder[i]);
    }

    return root;
};


// 재귀 활용이 깔끔한 풀이; return root를 통해 깔끔한 풀이가 가능함..!
const insert = (root, val) => {

    if (root === null) return new TreeNode(val);

    if (val < root.val) root.left = insert(root.left, val);

    if (val > root.val) root.right = insert(root.right, val);

    return root;

}