function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some basic async logic here
        setTimeout(function () {
            console.log("hi there");
        }, 30000);
    });
    return p;
}

async function main() {
    // this await make sures value is executed only after
    // it received the resolved promise
    let value = await kiratsAsyncFunction();
    // all logic after await gets stuck 
    console.log("hiii");
    console.log(value);
}

main();
console.log("after main");


// async await gets rid of .then()
// we dont have to sue callback and no .then() syntax

