var a = new Date();
console.log(a);

// whenever we are initialising promises, we have to give the 
// first argument as a function and the function also needs to have
// the first argument as resolve 

function onDone(data) {
    console.log(data);
}

var p = new Promise(function (onDone) {

});
console.log(p);

// this will print Promise { <pending> }
// you dont necessaruly need to initialise promise inside a function
// its simply an object hence can be initialised anywhere!

// A promise at a high level can have 3 states:
// => pending, resolved, rejected

// => pending, resolved
var d = new Promise(function (resolve) {
    // just set a timeout to create some lag
    // so that we can observe the state of the promise 
    // before resolving Promise { undefined } and 
    // after resolving Promise { 'foo' }
    setTimeout(function () {
        resolve("foor");
    }, 1000)
    // promise object will give Promise { <pending> }
    // if we dont resolve it properly Promise { 'foo' }
});

function callback() {
    console.log(d);
}
console.log(d);
// This means whenever d resolves,
d.then(callback)


// A promise is just a class that makes asyncronous and callback functions
// more readable. Whenever we create a Promise object, we need to pass in 
// a function as the argument which has resolve as the First Argument