function onDone() {
    console.log("he there");
}

setTimeout(onDone, 1000);
console.log("after setTimeout");

let a = 0;
for (let i = 0; i < 10000000; i++) {
    a += i;
}

console.log(a);

// setTimeout is an aysncronous function so whatever is after setTimeout will
// keep executing and after setTimeout gets ready to execute, it will execute after
// here, "after setTimeout" gets exectued first then "he there" gets executed
