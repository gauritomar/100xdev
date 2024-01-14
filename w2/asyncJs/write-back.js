const fs = require("fs");

fs.readFile("a1.txt", "utf-8", function (err, data) {
    data = data + " gauri was here!";
    fs.writeFile("a1.txt", data, function (err, data) {
        if (err) {
            console.log("Error writing to the file: ", err);
        }
    });
});

fs.readFile("a1.txt", "utf-8", function (err, data) {
    console.log(`Updated Data: ${data}`);
});


setTimeout(() => {
    fs.readFile("a1.txt", "utf-8", (err, data) => {
        console.log(`Reading the updated file after 5 seconds: ${data}`);
    })
}, 5000);
