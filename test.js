var arr = [4,1,6,9,3,2,8,7];

function compare(a,b) {
    if (a < b) return true;
    else return false;
}

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//选择排序，内层循环，每一圈选出一个最大的，然后放在后面
function sort(arr) {
    for (var i = 0 ; i < arr.length ; i ++) {
        var maxIndex = 0;
        for (var j = 0 ; j < arr.length - 1 - i ; j ++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i);
    }
}

//任何一种排序算法，都没有优劣之分，只有是否适合的场景。

sort(arr);
console.log(arr);