function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n) {
    return sqaure(n) * square(n);
}

function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);

    return square1 + square2;
}

function sumOfSomething(a, b, fn) {
    let s1 = fn(a);
    let s2 = fn(b);
    return s1 + s2;
}

console.log(sumOfSomething(3, 4, quad));