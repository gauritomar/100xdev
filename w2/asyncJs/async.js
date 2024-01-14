let a = 1;
console.log(a);

// in asyncronous functions we need an arrow or a callback function
// to tell the js environment that this is where my code resides

// in async programming we have delegated the task to someone and they
// will eventually call back the function hence we need to give it a 
// call back


// here instead of the arrow function we
// can also just use an anonymous function
fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("data from the file is: ");
    console.log(data);
})

let ans = 0;
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}
console.log(ans);