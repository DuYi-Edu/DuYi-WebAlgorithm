function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

function deepSearch(node, target, path) {
    if (node == null) return false;
    if (path.indexOf(node) > -1) return false;
    if (node.value == target) return true;
    path.push(node);
    var result = false;
    for (var i = 0 ; i < node.neighbor.length ; i ++) {
        result |= deepSearch(node.neighbor[i], target, path);
    }
    return result ? true : false;
}

console.log(deepSearch(b, "n", []));