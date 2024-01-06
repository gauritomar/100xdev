const fs = require('fs');

// It is just a wrapped on top of another async function, which is fine
// Usually all async functions we write will be on top of the JS provided
// async functions like setTimeout or fs.readFile

// my own asynchronous function
function gauriReadsFile(callbackFunction) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        callbackFunction(data);
    });
}

// callback function to call 
function onDone(data) {
    console.log(data);
}

gauriReadsFile(onDone)


// to write it in a cleaner way
// the reason to use a promise is to get rid of callbacks
// it is just syntactically cleaner but still uses callbacks under the hood
// callback hell can occur

function kiratReadFile() {
    console.log("inside kirat read file()");
    // creates an instance of the promise class
    return new Promise(function (resolve) {
        console.log("inside promise");
        fs.readFile("a-promise.txt", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

function onDoneofPromise(data) {
    console.log(data);
}
var a = kiratReadFile();
console.log(a);
a.then(onDoneofPromise);
// kiratReadFile().then(onDoneofPromise);

// kiratReadFile returns a Promise object on which we call onDoneofPromise function
// what happens here is that the promise object is syncronously returned 
// but the data of the promise comes asyncronously 
// the promise object is returned and when .then() is attached to it is
// run asyncronously and returns 