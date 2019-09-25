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


function bfs(roots, target) {
    if (roots == null || roots.length == 0) return false;
    var childs = [];
    for (var i = 0 ; i < roots.length ; i ++) {
        if (roots[i].value == target) {
            return true;
        } else {
            childs = childs.concat(roots[i].childs);
        }
    }
    return bfs(childs, target);
}

console.log(bfs([a], "n"));
