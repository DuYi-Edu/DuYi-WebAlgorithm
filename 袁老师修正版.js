function Node(value) {
  this.value = value;
  this.next = null;
}
// 为方面查看，添加一个打印方法
Node.prototype.print = function () {
  let n = this;
  let str = '';
  while (n) {
    str += n.value;
    n.next && (str += '->');
    n = n.next;
  }
  console.log(str);
};

// 链表逆置方法
function reverse(node) {
  if (!node) {
    return null;
  }
  if (node.next == null) {
    return node; // 最后一个节点逆置后必定是头结点
  }
  var newHead = reverse(node.next);
  node.next.next = node;
  node.next = null;
  return newHead;
}
// 创建节点的辅助方法
function createLinkedList(...arr) {
  if (arr.length === 0) {
    return null;
  }
  var root = new Node(arr[0]);
  var node = root;
  for (var i = 1; i < arr.length; i++) {
    node.next = new Node(arr[i]);
    node = node.next;
  }
  return root;
}
// 测试
var root = createLinkedList(1, 2, 3, 4, 5);
root.print();
var newRoot = reverse(root);
newRoot.print();
