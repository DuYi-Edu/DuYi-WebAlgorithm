function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

//对于二叉树来说，深度优先搜索，和前序遍历的顺序是一样的。
function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}

console.log(deepSearch(a, "n"));