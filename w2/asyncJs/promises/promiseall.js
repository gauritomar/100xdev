function getPromises() {
    let p1 = new Promise();
    let p2 = new Promise();
    return [p1, p2];
}

const x = getPromises();

// promise.all() methods takes an array of promises and returns a new promise
// this new promise is fulfilled with any array of results when all the 
// input promises are fulfilled
// if any of the input promises are rejected, the new promise is rejected
// with the reason of the rejected promise
Promise.all() 