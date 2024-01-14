console.log("hi");

setTimeout(function () {
    console.log("hi there from inside")
    setTimeout(function () {
        console.log("hi there from inside the inside")
    }, 5000);
}, 5000);

let a = 0;
for (let i = 0; i < 10; i++) {
    a = a + i;
}

console.log("after");

// is there is an async inside an aysync, after the outside async gets over
// in the web api, waits in the callback queue then gets picked up by the event loop
// to the call stack then the inside async function gets put inside the web api

// this is known as callback hell where callback inside callback