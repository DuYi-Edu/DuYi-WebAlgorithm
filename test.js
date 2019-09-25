function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a1 = new Node("a");
var b1 = new Node("b");
var c1 = new Node("c");
var d1 = new Node("d");
var e1 = new Node("e");
var f1 = new Node("f");
var g1 = new Node("g");

a1.left = c1;
a1.right = b1;
c1.left = f1;
// c1.right = g1;
b1.left = d1;
b1.right = e1;

var a2 = new Node("a");
var b2 = new Node("b");
var c2 = new Node("c");
var d2 = new Node("d");
var e2 = new Node("e");
var f2 = new Node("f");
var g2 = new Node("g");

a2.left = c2;
a2.right = b2;
c2.left = f2;
// c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
    if (root1 == root2) return true;//是同一个颗树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;//其中一个为空，另一个不为空
    if (root1.value != root2.value) return false;//相同位置的值不相等
    var leftBool = compareTree(root1.left, root2.left);//判断左子树是否相等
    var rightBool = compareTree(root1.right, root2.right);//判断右子树是否相等
    return leftBool && rightBool;//必须左右子树都相等才算相等
}

console.log(compareTree(a1, a2));