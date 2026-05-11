/*
    Write wordCount(str) that returns an object with each word as a key and its count as the value.
    wordCount("the cat sat on the mat the cat")
    { the: 3, cat: 2, sat: 1, on: 1, mat: 1 }

*/

const wrds = "The cat sat on the mat the cat"
const wrdCount = {};


function wordCount(str){
    const key = str.split(" ");

    for(let wrd of key){
        let key = wrd.toLowerCase()
        wrdCount[key] = (wrdCount[key] || 0) + 1;
    }
    console.log(wrdCount)
}



wordCount(wrds)