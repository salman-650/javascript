const prompt = require('prompt-sync')();

let temperature = prompt("enter the temperature: ");


if (temperature > 20) {
    console.log("its warm outside");
} else {
    console.log("its cool outside");
}