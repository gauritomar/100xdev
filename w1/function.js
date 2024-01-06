// syncronous function

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

// console.log(findSum(1000));

// asyncronous function

function findSumTill100() {
    console.log(findSum(100))
}

// busy waiting

function syncSleep() {
    let a = 1;
    for (let i = 0; i < 10000000; i++) {
        a++;
    }
}

setTimeout(findSumTill100, 1000)
syncSleep();

console.log("hello world");