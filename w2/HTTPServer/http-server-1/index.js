const express = require("express");
const app = express();
const port = 3000


// using arrow function
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// directly using function
// high level APIs of express are used to create routes 
// this is a callback funtion
app.get('/', function (res, res) {
    res.send('Hello world')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})