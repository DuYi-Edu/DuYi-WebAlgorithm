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

function deepSearch(root, target) {
    if (root == null) return false;
    if (root.value == target) return true;
    var result = false;
    for (var i = 0 ; i < root.childs.length ; i ++) {
        result |= deepSearch(root.childs[i], target);
    }
    return result ? true : false;
}

console.log(deepSearch(a, "n"));