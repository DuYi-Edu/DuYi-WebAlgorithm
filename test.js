/* 
感谢wangjieCode同学的提醒，此版本的代码有bug：
1. 当链表长度为1时，会出现错误
2. 当链表长度为2时，会出现环形链表
修复版本以放到了另一个JS文件【袁老师修正版.js】中
*/
function Node(value) {
  this.value = value;
  this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function nizhi(root) {
  if (root.next.next == null) {
    //代表当前节点是倒数第二个节点
    root.next.next = root; //让最后一个节点指向自己（倒数第二个节点）
    return root.next;
  } else {
    var result = nizhi(root.next);
    root.next.next = root;
    root.next = null;
    return result;
  }
}

var newRoot = nizhi(node1);

function bianLink(root) {
  if (root == null) return;
  console.log(root.value);
  bianLink(root.next);
}
bianLink(newRoot);
