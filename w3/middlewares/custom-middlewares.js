const express = require("express")
const app = express();

/*
we can create a wrapper over the authentication
we define a middle ware function and pass it as input to the routes

next()
next is a function that we can call when the middlewares think
that everything is fine
next() routes the request to the next callback function 
express does chaining on the callback functions

middlewares sit between the route request and the final headers

rate limitting is also a type of middleware
*/

function userMiddleware(req, res, next) {
    if (username != "gauri" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    else {
        next();
    }
};

// all these routes can have multiple callback functions in them 
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    // do something with kidney here

    res.send("Your kidneys are healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    // dome something with kidney here

    res.send("Your kidneys are healthy");
});


app.get("/heart-check", userMiddleware, (req, res) => {
    // do something with user here

    res.send("Your heart is healthy")
})
