/*
1. Hashing
the string gets converted to a hash and we cannot convert that string back
does not require a password
is one way

2. Encryption
the string that gets encrypted can be decrypted back
requires a password
is two way


3. Json Web Tokens
- some hashing function but only takes json as input
- the string generated is different from hashing and ecryption
- it creates a token in the end 
- the token that is created can be used to construct the json back

the Authoization Bearer token

- it basically compresses a big json into a string using a jwt.encode function
        along with a password
- this string is decoded back to the json using jwt.verify

- anybody can decode the string but we need to password to actually verify

- the signature part of the string that is created as part of the jwt
    can only be decoded by using a password

the token is usually stored in the local storage of the browser
- this token can be relayed back in every conversation 
*/

async function getData() {
    const response = await fetch("chagpt-servers", {
        // we can get the JWT token from the local storage
        headers: {
            "Authorization": localStorage.read("token")
        }
    });
}