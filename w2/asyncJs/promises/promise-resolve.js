// Promise.resolve(fn(x)) only when fn is a syncronous function
// Promise.resolve() returns a Promise Object that is resolved with the
// return value of fn(x). If the argument is already a promise, 
// it is returned unchanged. 
// if the argument is a .thenable object then Promise.resolve converts
// it to a promise

// Promise.resolve(fn(x)) is a way to create a promise that wraps the result of the 
// syncronous operation fn(x)

function synchronousOperation(input) {
    return input * 2;
}

const x = 5;

// this creates a promise that resolves with the result of doubling x
const promiseResult = Promise.resolve(synchronousOperation(x));

console.log(`promiseResult before .then():  ${promiseResult}`);

// then callback is used to handle the resolved value of the promise
promiseResult.then(result => {
    console.log(result);
})