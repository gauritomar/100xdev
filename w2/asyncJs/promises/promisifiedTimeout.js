function promisifiedTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
    return p;
}

promisifiedTimeout(1000).then(function () {
    console.log("first is done");
    return promisifiedTimeout(2000).then(function () {
        console.log("second one is done");
    });
})

// this promisified code can be written using callbacks:

function callbackTimeout(duration, callback) {
    setTimeout(function () {
        callback();
    }, duration);
}

callbackTimeout(1000, function () {
    console.log("first is done.");

    callbackTimeout(2000, function () {
        console.log("second one is done as well.");
    });
})