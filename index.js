function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null;

console.log(a.value);
console.log(a.next.value);
console.log(a.next.next.value);
console.log(a.next.next.next.value);
