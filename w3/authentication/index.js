const express = require("express");
// a library that implements the json web token requirement
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singhs"
    },
    {
        username: "gauri@gmail.com",
        password: "123321",
        name: "gauri singh"
    },
    {
        username: "adya@gmail.com",
        password: "123456789",
        name: "adya tomar"
    }
]


function userExists(username, password) {
    return ALL_USERS.find(user => user.username === username && user.password === password) !== undefined;
}
const exists1 = userExists("harkirat@gmail.com", "123");
console.log(exists1);


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "user does not exist in memory database"
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        // decoded is the orignal json object
        // return everything but themselves
        console.log(`Decoded: ${decoded}`);
        console.log(username)
        const allUsersExceptCurrent = [];
        for (let i = 0; i < ALL_USERS.length; i++) {
            if (username != ALL_USERS[i].username) {
                allUsersExceptCurrent.push(ALL_USERS[i]);
            }
        }
        res.json({
            users: allUsersExceptCurrent
        })
    }
    catch (err) {
        return res.status(403).json({
            msg: err
        });
    }
});

app.listen(3000);