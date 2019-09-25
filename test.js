var arr = [4,1,6,9,3,2,8,7];

function getMin(arr) {
    if (arr == null || arr.length == 0) return;
    var index = -1;
    for (var i = 0 ; i < arr.length ; i ++) {
        if (arr[i] != null && arr[i] < arr[index] || arr[i] != null && index == -1) {
            index = i;
        }
    }
    var result = arr[index];
    arr[index] = null;
    return result;
}

function sort(arr) {
    var newArr = new Array(arr.length);
    for (var i = 0 ; i < newArr.length ; i ++) {
        newArr[i] = getMin(arr);
    }
    return newArr;
}

console.log(sort(arr));