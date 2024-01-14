// promises are just syntactical sugar on top of async and callback
// it is a cleaner way to write callbacks.
// under the hood promises still use callbacks and asyncs
// callback hell, rust also uses async await synteax


// when we write asyncronous function, we are using the predefined async
// functions under the hood for it


// we use syncronous code until we have to do async things like
// read from and write to file
// make a network call
// sleep/wait for some time
// database call

// 5% => async code, do away with callbacks


// in a promisied function, it the function does not resolve 
// and instead there is an error logged, 
// .then() will not work, in this case .catch() will work

let n = new Promise(function (resolve) {
    resolve;
})

// whenever we create an object of a promise, 
// there can be three possible states: pending, resolve and rejected

// callback => callback hell
// promises => promise chaining + async await syntax
