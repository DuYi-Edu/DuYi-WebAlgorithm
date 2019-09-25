// 变态青蛙跳台阶
// 这只青蛙，一次可以跳1级台阶、2级台阶、或n级台阶。
// 问：这只青蛙，跳上n级台阶有多少种方法?

// f(n) = f(n-1) + f(n-2) + f(n-3) + …… + f(2) + f(1) + f(0)

function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    var result = 0;
    for (var i = 1 ; i < n ; i ++) {
        result += jump(n - i);
    }
    return result + 1;// +1代表从0级台阶直接跳上去的情况
}
/*
* 1,1,1,1,
* 1,1,2
* 1,2,1,
* 2,1,1,
* 1,3,
* 3,1,
* 2,2,
* 4
* */
console.log(jump(4));