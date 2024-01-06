let p = new Promise(function (resolve) {
    // Place for the writer of the async function to call the resolve
    // at the end with the data

    // things that can be done here: make a database call,
    // asyncronise and call, wait and call etc
    resolve("hi there");
});

// the .then on a promise function gets resolved whenever the 
// async function resolves
// whenever resolve gets called, async gets called

p.then(function () {
    console.log(p);
})