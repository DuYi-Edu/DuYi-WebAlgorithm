var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    var root = new Node(qian[0]);
    var index = zhong.indexOf(root.value);//找到根节点在中序遍历中的位置
    var qianLeft = qian.slice(1, 1 + index);//前序遍历的左子树
    var qianRight = qian.slice(1 + index, qian.length);//前序遍历的右子树
    var zhongLeft = zhong.slice(0, index);//中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length);//中序遍历的右子树
    root.left = f1(qianLeft, zhongLeft);//根据左子树的前序和中序还原左子树并赋值给root.left
    root.right = f1(qianRight, zhongRight);//根绝右子树的前序和中序还原右子树并赋值给root.right
    return root;
}

var root = f1(qian, zhong);

console.log(root.left);
console.log(root.right);