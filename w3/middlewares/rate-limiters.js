const express = require("express");
const app = express();

let numberOfRequests = 0;

// middleware to calculate the load on our server
function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

//if a middleware needs to be called for every request
app.use(calculateRequests);
//
app.use(express.json())
// what this does is before any request is handled, 
// the middle ware is applied to it

/*
for a function to be middleware it should be taking 3 arguments
req, res and next()
*/

app.get("/health-checkup", (req, res) => {
    res.json({
        msg: "hi there"
    })
});

app.get("/health-checkup3", (req, res) => {

});

app.listen(3000);