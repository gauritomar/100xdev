// wrapping an async function inside another

function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
};

myOwnSetTimeout(function () {
    console.log("hi there");
}, 1000);


// writing this as a promise

function promisifiedMyOwnSetTimeout(duration) {
    // Promise is a class whose first argument is function
    // and the first argument of this function is resolve

    // this function is also a callback function

    const p = new Promise(function (resolve) {
        // this means that after the duration of 1s, 
        // call resolve
        // setTimeout(resolve, 1000);
        // this can also be written as
        const duration = 4000;
        // over here, setTimeout in itself has a callback function
        // to it
        setTimeout(function () {
            resolve();
        }, duration);
    });
    return p;
}

// we call this function to return as the created promise object
const ans = promisifiedMyOwnSetTimeout(1000);
// if we log it before applying .then() then we get a 
// Promise { <pending> }
// with the .then() to initiate the promise object



function myOwnSetTimeout(duration) {
    // the promise class returns an object
    let p = new Promise(function (resolve) {
        // after 1 second call resolve
        setTimeout(resolve, 1000);
    });

    return p;
}


myOwnSetTimeout(1000).then(function () {
    console.log("log the first thing");
});