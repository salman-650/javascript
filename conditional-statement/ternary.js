const prompt = require('prompt-sync')();
let age = prompt("enter the age: ");

let result  = (age >= 18) ? "adult" : "minor";
console.log(result);