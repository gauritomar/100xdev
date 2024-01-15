const express = require('express');
const port = 3000;

const app = express();

app.post('/conversations', (req, res) => {
    console.log(req.headers["authorize"]);
    console.log(req.body);
    res.send({
        msg: "2+2=4"
    })
})

app.get("/route/handler", (req, res) => {
    // headers, body, quer, parameters
    res.json({
        name: "gauri",
        age: 21
    })

})

app.get('/', (req, res) => {
    res.send('<b> Hello World from HTTP2 server!</b>')
})

app.listen(port, () => {
    console.log(`Example App Listening on port ${port}`)
})
