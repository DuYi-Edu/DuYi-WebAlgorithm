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


function f1(root) {
    if (root == null) return;
    f1(root.left);
    f1(root.right);
    console.log(root.value);
}

f1(a);