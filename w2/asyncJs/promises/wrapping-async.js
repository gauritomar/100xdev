
// this is a wrapped on top of the setTimeout async function 

// myOwnSetTimeout will never go outside the javascript single thread
// the setTimeout inside it will go but it in itself wont
function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
    console.log("hi there");
}, 1000);

// this approach uses a callback, we have created a function
// where other people can send a callback, this is good but leads to 
// callback hell

// create a function that logs something after 1s and then waits
// 2s to log another thing

// after the first async happens, another async picks up from the other
// async function
// this is unecessary indentation aka callback hell
setTimeout(function () {
    console.log("hi there");

    setTimeout(function () {
        console.log("inside the second one");
    }, 2000)
}, 1000);

