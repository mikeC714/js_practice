// Using Node's fs module, read a file called numbers.txt (one number per line) and log their sum.

// numbers.txt:
// 10
// 20
// 30
// expected output: 60

const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").trim().split(/\r?\n/); ;


let sum = 0;

for(let i = 0; i < INPUT.length; i++){
    sum += Number(INPUT[i])
}
console.log(sum)