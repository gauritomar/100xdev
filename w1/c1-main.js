function greet() {
    console.log("hello world");
}

function greetAlien() {
    console.log("hello alien");
}

function interval() {
    return 4000;
}
setTimeout(greetAlien(), interval());
