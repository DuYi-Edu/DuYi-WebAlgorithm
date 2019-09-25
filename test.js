// 动态规划，笔试遇到动态规划是后面的大题

// 0, 1, 1, 2, 3, 5, 8, 13, 21 ……
// 给出第n位，问第n位值为几？

function fibo(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    var a = 0;
    var b = 1;
    var c = 0;
    for (var i = 3 ; i <= n ; i ++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

// f(n) = f(n-1) + f(n-2);
function fibo2(n) {
    if (n <= 0) return -1;
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibo2(n-1) + fibo2(n-2);
}

console.log(fibo2(7));