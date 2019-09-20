var b = {
    value: 2,
    next: null
}

var a = {
    value: 1,
    next: b
}

console.log(a.next == b);