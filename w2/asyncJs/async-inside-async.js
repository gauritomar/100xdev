console.log("hi");

setTimeout(function () {
    console.log("hi there from inside")
    setTimeout(function () {
        console.log("hi there from inside the inside")
    }, 5000);
}, 5000);

let a = 0;
for (let i = 0; i < 10; i++) {
    a = a + i;
}

console.log("after");