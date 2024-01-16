const express = require("express");

const app = express();


// middleware checks
function usernameValidator(username, password) {
    if (username != "gauri" && password != "pass") {
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId) {
    if (kidneyId != 1 && kidneyId != 2) {
        return false;
    }
    return true;
}

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    console.log(`username: ${username}, password: ${password}, kidneyId: ${kidneyId}`);

    if (!usernameValidator(username, password)) {
        res.status(403).json({
            msg: "User does not exist!"
        });
        return;
    }

    if (!kidneyValidator(kidneyId)) {
        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }

    res.send("Your heart is healthy!");
});

app.put("/replace-kidney", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (!usernameValidator(username, password)) {
        res.status(403).json({
            msg: "User does not exist"
        });
        return;
    }
    if (!kidneyValidator(kidneyId)) {
        res.status(411).json({
            msg: "wrong kidney inputs"
        });
        return;
    }
    // do some kidney replacement logic here

    res.send("Your kidney has been replaced!")
})

app.listen(3000);