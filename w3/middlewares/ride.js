const express = require("express");

const app = express();
// add app.use() global middleware for all endpoints below it
// this is applicable only for endpoints below it
app.use(express.json());


function isOldEnough(age) {
    if (age >= 14) {
        return true;
    }
    else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}

app.get("/ride1", (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You can successfully ridden ride 1"
        })
    }
    else {
        res.status(411).json({
            msg: "Sorry you are not of age yet"
        })
    }
})

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
    res.json({
        msg: "Thank you for riding ride 2"
    })
})

app.listen(3000);