const fs = require("node:fs");
const path = require("path");
const INPUT = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf-8").split("\n");

const VOWELS = ["a", "e", "i", "o", "u"];
const BAD = ["ab", "cd", "pq", "xy"];
const nonoWords = [];
const goodWords = [];
const subStrs = [];

for(let i = 0; i < INPUT.length ; i++){
	const hasBadWrd = BAD.some(char => INPUT[i].includes(char));
	for(const vowel of VOWELS){
		if(INPUT[i].includes(vowel)){
			goodWords.push(INPUT[i]);
		}
	}
	console.log(subStrs);
	nonoWords.push(hasBadWrd);
}
//
// console.log(nonoWords.length);
// console.log(goodWords);
