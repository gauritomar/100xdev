// promisifed syntax

function kiratAsyncFunction() {
    let p = new Promise(function (resolve) {
        resolve("hi there!")
    });
    return p;
}

function main() {
    kiratAsyncFunction().then(function (value) {
        console.log(value);
    });
}

main();


// async/await syntax

function kiratAsyncFunction() {
    let p = new Promise(function (resovle) {
        resolve("hi there");
    })
    return p;
}

async function main() {
    const value = await kiratAsyncFunction();
    console.log(value);
}

main();

// async and await is also syntactic sugar. it sitll uses callbacks/promises
// under the hood
// makes the code much more readable than callbacks/ promise
// usually used on the caller side, not on the side wehre we define
// an async function

// any function that wants to use await, needs to be async
// rather than using the .then() syntax, we add await before and
// get the await final value in the variable

// async is only valid in async function and the top level
// bodies of modules 