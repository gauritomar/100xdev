const express = require("express");
const zod = require("zod");

const app = express();

/*
{
    email: string => email
    password: string => atleast 8 characters
    country: "IN", "US"
}
*/

// zod object can get more and more nested
const schema = zod.object({
    email: zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US"))
});

// if its an array of strings with atleast 1 input, return true, else return false



app.use(express.json());

app.post("/health-check", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
})