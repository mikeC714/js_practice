const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("");

let flr = 0;

const results = INPUT.findIndex(dir => (dir === "(" ? ++flr : --flr) === -1) + 1;

console.log(results);