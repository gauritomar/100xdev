const express = require("express");
// express is written on top of the http library
const http = require("http");
// the js of express is written using c++ which binds to a socket/port on our machine 

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

/*

javascript is single threaded and so is node.js cannot handle mulitple requirests at the same time
only when one request is over that the other one is processed. 

the server calls that do have latency are usually database calls which are asyncronouns


*/