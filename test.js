function Node(value) {
    this.value = value;
    this.childs = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root) {
    if (root == null) return;
    console.log(root.value);
    for (var i = 0 ; i < root.childs.length ; i ++) {
        deepSearch(root.childs[i]);
    }
}

deepSearch(a);