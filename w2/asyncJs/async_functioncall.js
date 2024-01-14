const fs = require('fs');

let a = 1;
console.log(a);

// this asyncronous function gets dedicated
// everything after runs first then this gets printed
fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("data read from the file is ");
    console.log(data);
})

let ans = 0;
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}

console.log(ans);

//asyncronous functions go beyond the call stack to the web apis
// the call stack is basically what needs to be run first
// this is applicable only for syncronous programming

// setTimeout and fs weren't inteded to be a part of javascript
// these are part of the web APIs
// since there are common functions, the browser provides them as
// part of the run time environment

// the node run time also gives it to you

// anyone making the callback pushed the function into the
// callback queue. the event loop pulls that function out
// fromt the callback queue and puts it into the call stack

// the thread keeps doing its thing, the webapi sends the asyncronous function
// to the callback queue and its only after the call stack finishes the current 
// thread becomes idle that we are able to pick it up via the event loop

// we have to use the webapis for them cannot do it via the call stack
// because then the call stack gets stuck with the time consuming async function 