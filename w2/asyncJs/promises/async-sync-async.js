function someSyncTask1() {
    console.log("some sync task 1");
}

function someSyncTask2(data) {
    console.log(`some sync task 2, data: ${data}`);
}

// Assuming you have an async function
async function asyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Some asynchronous task
            const data = "some data";
            resolve(data);
        }, 1000);
    });
}

async function main() {
    someSyncTask1();

    // Call the async function and wait for it to complete
    const data = await asyncFunction();

    // Now you can perform the synchronous task with the data
    someSyncTask2(data);
}

// Call the main function to start the program
main();
