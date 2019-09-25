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

function canLink(resultList, tempBegin, tempEnd) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0 ; i < resultList.length ; i ++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    //两个点都是新的点（都不在任何部落里）——可以连接，产生新的部落
    // begin在A部落，end没有部落 —— A部落扩张一个村庄
    // end在A部落，begin没有部落 ——A部落扩张一个村庄
    // begin在A部落，end在B部落 ——将AB两个部落合并
    // begin和end在同一个部落，——不可以连接
    if (beginIn != null && endIn != null && beginIn == endIn) {
        return false;
    }
    return true;
}

function link(resultList, tempBegin, tempEnd) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0 ; i < resultList.length ; i ++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    if (beginIn == null && endIn == null) {// 两个点都是新的点（都不在任何部落里）——可以连接，产生新的部落
        var newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr);
    } else if (beginIn != null && endIn == null) {// begin在A部落，end没有部落 —— A部落扩张一个村庄
        beginIn.push(tempEnd);
    } else if (beginIn == null && endIn != null) {// end在A部落，begin没有部落 ——A部落扩张一个村庄
        endIn.push(tempBegin);
    } else if (beginIn != null && endIn != null && beginIn != endIn) {// begin在A部落，end在B部落 ——将AB两个部落合并
        var allIn = beginIn.concat(endIn);
        var needRemove = resultList.indexOf(endIn);
        resultList.splice(needRemove, 1);
        needRemove = resultList.indexOf(beginIn);
        resultList.splice(needRemove, 1);
        resultList.push(allIn);
    }
    tempBegin.neighbor.push(tempEnd);
    tempEnd.neighbor.push(tempBegin);
}

function kruskal(pointSet, distance) {

    var resultList = [];//这里是二维数组，此数组代表的是有多少个"部落"

    while(true) {
        var minDis = max;
        var begin = null;
        var end = null;
        for (var i = 0 ; i < distance.length ; i ++) {
            for (var j = 0 ; j < distance[i].length ; j ++) {
                var tempBegin = pointSet[i];
                var tempEnd = pointSet[j];
                if (i != j//去掉自己到自己的距离，因为都为0
                    && distance[i][j] < minDis
                    && canLink(resultList, tempBegin, tempEnd)
                ) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        link(resultList, begin, end);
        if (resultList.length == 1 && resultList[0].length == pointSet.length) {//只存在一个部落
            break;
        }
    }

}

kruskal(pointSet, distance);
console.log(pointSet);