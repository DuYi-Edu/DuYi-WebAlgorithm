function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node("2");
var node5 = new Node("5");
var node3 = new Node("3");
var node6 = new Node("6");

node2.right = node5;
node5.left = node3;
node5.right = node6;

function getDeep(root) {
    if (root == null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root) {
    if (root == null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {//不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

function leftRotate(root) {
    // 找到新根
    var newRoot = root.right;
    // 找到变化分支
    var changeTree = root.right.left;
    // 当前旋转节点的右孩子为变化分支
    root.right = changeTree;
    // 新根的左孩子为旋转节点
    newRoot.left = root;
    // 返回新的根节点
    return newRoot;
}

function rightRotate(root) {
    // 找到新根
    var newRoot = root.left;
    // 找到变化分支
    var changeTree = root.left.right;
    // 当前旋转节点的左孩子为变化分支
    root.left = changeTree;
    // 新根的右孩子为旋转节点
    newRoot.right = root;
    // 返回新的根节点
    return newRoot;
}

function change(root) {//返回平衡之后的根节点
    if (isBalance(root)) return root;
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {//不平衡，左边深，需要右旋
        return rightRotate(root);
    } else {//不平衡，右边深，需要左旋
        return leftRotate(root);
    }
}

console.log(isBalance(node2));

var newRoot = change(node2);

console.log(isBalance(newRoot));
console.log(newRoot);
