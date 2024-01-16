const express = require("express");

const app = express();

// javascript is an interpreted language hence express.json()
// needs to be called to the top before any of the routes
app.use(express.json())

app.post("/health-checkup", function (req, res) {
    // if we dont use app.use(express.json()) the body will not get
    // extracted there is no input validation otherwise
    const kidneys = req.body.kidneys;
    if (!kidneys) {
        res.json({
            msg: "wrong inputs"
        })
    }
    // we have to do a lot of checks, like if it is an array
    // check if it is an array of integers and all... multiple checks
    // have to be done to secure our backend
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is " + kidneyLength);
});



/*
If client users can read our exceptions, that means that our backend is exposed and
can be infiltrated and see some logic

express hanles this for us and in production mode doesnt not send exception to client
it should send status code to verify 

we can also use global catches if our server goes down, it goes down gracefully
at the end of routes if there is an excetion
*/

// global catches we need to define a function that takes in 4 inputs not 3 like validation
// in case of exception the control reaches here and the error does not propogate to the end
// user
// error handling middleware and express knows its error handling because it has 4 arguments 
app.use((err, req, res, next) => {
    res.json({
        msg: "sorry our server is down!"
    })
});

app.listen(3000);