var arr = [4,1,6,9,3,2,8,7];

//排序不是比较大小。

//排序的本质是比较和交换。


function compare(a, b) {//比较之后需要得出是否需要交换
    if (b < a) return true;
    else return false;
}

function exchange(arr, a, b) {//将数组中ab位置里的值进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {//这个sort可以是冒泡排序也可以是选择排序也可以是其它排序。
    for (var i = 0 ; i < arr.length ; i ++) {
        for (var j = 0 ; j < arr.length - 1 - i ; j ++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}
sort(arr);
console.log(arr);


