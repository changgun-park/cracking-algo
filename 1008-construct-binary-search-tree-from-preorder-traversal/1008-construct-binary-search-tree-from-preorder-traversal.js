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

    // 배열 길이가 1이면 탈출한다.
    // 1. 배열에서 첫번째 요소보다 큰 요소를 찾는다.
    // 2. 해당 요소를 right로 할당하고, 재귀 호출한다.
    // 3. 작은 요소는 left로 할당하고, 재귀 호출한다.
    let root = new TreeNode(preorder[0]);

    const recursiveConstruct = (preorder, root) => {
        if (preorder.length <= 1) return;
        
        const pivot = findIndexOfLarge(preorder);
        const left = preorder.slice(1, pivot);
        const right = preorder.slice(pivot);

        if (left.length) {
            const leftRoot = new TreeNode(left[0]);
            root.left = leftRoot;
            recursiveConstruct(left, leftRoot)
        }

        if (right.length) {
            const rightRoot = new TreeNode(right[0]);
            root.right = rightRoot;
            recursiveConstruct(right, rightRoot)
        }
    }

    recursiveConstruct(preorder, root);

    return root;
};