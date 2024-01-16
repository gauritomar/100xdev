const zod = require("zod")



// if this is an array of number with atleast 1 input, 
// return true, else return false

function validateInput(arr) {

    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);

}

// let arr = [4, "chipe", 6, 7];
// validateInput(arr);

// another use case could be validate an object that is like
/*
{
    email => string => should look like email
    password => should have 8 letters
}
*/

function validateLogIn(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

let testLogIn = {
    email: "gauri@gmail.com",
    password: "password"
};

validateLogIn(testLogIn);
