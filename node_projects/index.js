var fs = require("fs");
var data = fs.readFileSync('document.txt');

console.log(data.toString());
console.log("Program Ended");