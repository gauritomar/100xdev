const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}

app.post("/login", (req, res) => {
    const response = validateInput(req.body);
    console.log(response);
    if (response.success) {
        res.json({
            msg: "Login successful"
        })
    }
    else {
        res.json({
            msg: "Your inputs are invalid"
        })
    }
});

app.listen(3000);