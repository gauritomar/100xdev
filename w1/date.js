const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

function calculateSum() {
    let a = 0;
    for (let i = 0; i < 100000; i++) {
        a = a + i;
    }
    return a;
}

const ans = calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);

function currentTimePrint() {
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);