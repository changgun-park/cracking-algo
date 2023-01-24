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
    const inorder = [];

    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        inorder.push(node.val);
        dfs(node.right);
    }

    dfs(root);

    const counter = {};
    for (const val of inorder) {
        const remainder = k - val;
        if (remainder in counter) {
            found = true;
            break;
        }
        if (!(val in counter)) {
            counter[val] = true;
        }
        
    }

    return found;
};