const fs = require("fs");

fs.readFile("a1.txt", "utf-8",
    function (err, data) {
        console.log(err);
        console.log(data);
    });


console.log("done");

// a desktopt app in javascript will also have a single thread executing the 
// call stack operations and the async function handles by the webAPI will
// be delegated to the desktop system or an external environment

// fs and setTimeout, setInterval do not need to be made asyncronous by adding
// async and await keywords rather they are asyncronous by design