function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

function findSumTill100() {
    let ans = findSum(100);
    console.log(`Callback function is back: ${ans}`);
}

setTimeout(findSumTill100, 1000);
console.log("hello world!");

// this code is ugly.
// promises are syntactical sugar that make this code slightly more readable
// promises are a prettier way to write this
