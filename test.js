var max = 1000000;
var pointSet = [];
var distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);


function getIndex(str) {
    for (var i = 0 ; i < pointSet.length ; i ++) {
        if (str == pointSet[i].value) return i;
    }
    return -1;
}

//需要传入点的集合，边的集合，当前已经连接进入的集合
// 此方法，根据当前已经有的节点，来进行判断，获取到距离最短的点
function getMinDisNode(pointSet, distance, nowPointSet) {
    var fromNode = null;//线段的起点
    var minDisNode = null;//线段的终点
    var minDis = max;
    //根据当前已有的这些点为起点，依次判断连接其他的点的距离是多少
    for (var i = 0 ; i < nowPointSet.length ; i ++) {
        var nowPointIndex = getIndex(nowPointSet[i].value);//获取当前节点的序号
        for (var j = 0 ; j < distance[nowPointIndex].length ; j ++) {
            var thisNode = pointSet[j];//thisNode表示distance中的点，但是这个点不是对象。
            if (nowPointSet.indexOf(thisNode) < 0//首先这个点不能是已经接入的点
            && distance[nowPointIndex][j] < minDis) {//其次点之间的距离得是目前的最短距离
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis  = distance[nowPointIndex][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);
    return minDisNode;
}

function prim(pointSet, distance, start) {
    var nowPointSet = [];
    nowPointSet.push(start);
    //获取最小代价的边
    while (true) {
        var minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if (nowPointSet.length == pointSet.length) {
            break;
        }
    }
}

prim(pointSet, distance, pointSet[2]);

console.log(pointSet);