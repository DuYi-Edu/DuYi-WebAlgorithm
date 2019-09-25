var arr = [];

for (var i = 0 ; i < 1000 ; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var num = 0;
function search(arr, target) {
    for (var i = 0 ; i < arr.length ; i ++) {
        num += 1;
        if (arr[i] == target) return true;
    }
    return false;
}

function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value < num) {//目标值比当前节点大
        if (root.right == null) root.right = new Node(num);//如果右侧为空，则创建节点
        else addNode(root.right, num);//如果右侧不为空，则向右侧进行递归
    } else {//目标值比当前节点小
        if (root.left == null) root.left = new Node(num);
        else addNode(root.left, num);
    }
}

function buildSearchTree(arr) {
    if (arr == null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (var i = 1 ; i < arr.length ; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

console.log(search(arr, 1000));
console.log(num);

var root = buildSearchTree(arr);
console.log(root);