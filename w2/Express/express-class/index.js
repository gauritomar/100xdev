// creating an http server using express which is not a node defaulrt libabry hence 
// we will have to npm install express

const express = require("express");
const app = express();


app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// for get we get our data in the query parameters

// users can check how many kidneys they have and their health
app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys: numberOfKidneys,
        numberOfHealthyKidneys: numberOfHealthyKidneys,
        numberOfUnhealthyKidneys: numberOfUnhealthyKidneys
    });
});


// for post we get the data of request in the body

// users can add a new kidney
app.post("/", (req, res) => {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push(
        {
            healthy: isHealthy
        })

    const msg = isHealthy ? "Your healthy kidney has been added" :
        "You unhealthy kidney has been added";
    res.json({
        msg
    });

});

// user can replace every kidney, make it healthy
app.put("/", (req, res) => {
    const johnKidneys = users[0].kidneys;

    // if there are no unhealthy kidneys, we should
    // return status code

    const unhealthyKidneys = johnKidneys.filter(kidney => !kidney.healthy);

    if (unhealthyKidneys == 0) {
        return res.status(411).json({
            msg: "There are no unhealthy kidneys to convert!"
        });
    }

    for (let i = 0; i < johnKidneys.length; i++) {
        johnKidneys[i].healthy = true;
    }

    res.json({
        msg: "All kidneys have been healthy!"
    });
});

// users can remove all unhealthy kidneys
app.delete("/", (req, res) => {
    // if there are no unhealthy kidney there should be
    // error and we should send 411 status code
    const newKidneys = [];
    const johnKidneys = users[0].kidneys;

    const unhealthyKidneys = johnKidneys.filter(kidney => !kidney.healthy);

    if (unhealthyKidneys == 0) {
        return res.status(411).json({
            msg: "No unhealthy kidneys found!"
        });
    }


    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "All unhealthy kidneys have been deleted!"
    })
});


app.get("/error", (req, res) => {
    // whenever we create an error, js by default sends a 500 request
    throw new Error("sdhfksdhfi");
});

app.listen(3000);