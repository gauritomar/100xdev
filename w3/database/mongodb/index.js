const express = require("express");
const jwt = require("jwt");
const mongoose = require("mongoose");
const keys = require("../../keys.json");

const jwtPassword = "123456";

const mongoDBconfig = keys.find(entry => entry.service === "MongoDB");
console.log(mongoDBconfig);

mongoose.connect(
    mongoDBconfig.url
);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

const app = express();
app.use(express.json());

function userExists(username, password) {
    // should check in the database
}

app.post("/signin", async (req, res) => {
    const usernmae = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our memory db"
        });
    }

    var token = jwt.sign({
        username: username
    }, "shhhh");

    return res.json({
        token
    });
})

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username });
    // CRUD: Create, Update, Read, Delete
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    await user.save();

    res.json({
        "msg": "User created successfully"
    });

})