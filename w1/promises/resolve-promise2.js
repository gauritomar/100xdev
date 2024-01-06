
// dummy async function that almost immediately resolves
// this is a defining side

function kiratAsyncFunction() {
    let p = new Promise(function (resolve) {
        // there should be async function like file reading etc
        resolve("heeheheh");
    });
    return p;
}


const value = kiratAsyncFunction();
value.then(function (data) {
    // actually logging the data what the functinon resolved with 
    // this is the resolving side
    console.log(data);
})


// the simple function equivalent is this
function kiratSimpleFunction() {
    return "hi there";
}

const data = kiratSimpleFunction();
console.log(data);
