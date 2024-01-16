/*
every hard to keep track of input validation for a lot of complex client side
there are many input validation libraries that removes manual checks and 
we can use this library for schema validation

it is typescript first schema validation for static type inference
zod parses the input from user
*/

const express = require("express");
const zod = require("zod");

const app = express();

// we can define schema which should be an array of numbers
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const result = schema.safeParse(kidneys);

    if (!result.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    }
    else {
        res.send({
            result
        })
    }
});

app.listen(3000);
