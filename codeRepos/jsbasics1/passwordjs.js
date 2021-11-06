// password.js

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("What's your new password?  ", function (input) {
    if (input.length < 10) {
        console.log("try again");
    } else {
        console.log("correct")
    }
});
reader.close();