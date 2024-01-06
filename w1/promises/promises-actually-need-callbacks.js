// promise function wrapper on top of a simple function
// promises still uses callbacks under the hood

function kiratAsyncFunction() {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    });
    return p;
}

const value = kiratAsyncFunction();
value.then(function () {
    console.log(value);
    console.log("hi there");
})

// simple function 

function kiratSimpleFunction(callback) {
    setTimeout(callback, 3000)
}

kiratSimpleFunction(function () {
    console.log("hello!");
});