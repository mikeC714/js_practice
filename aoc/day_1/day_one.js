// - Day 1: Not Quite Lisp ---

// Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

// Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// Here's an easy puzzle to warm you up.

// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:

//     (()) and ()() both result in floor 0.
//     ((( and (()(()( both result in floor 3.
//     ))((((( also results in floor 3.
//     ()) and ))( both result in floor -1 (the first basement level).
//     ))) and )())()) both result in floor -3.

// To what floor do the instructions take Santa?

// To play, please identify yourself via one of these services:


// directions are needed
// An object can be used for the param destructing to get the directions, iterate the total direction and 


// this function will take four parameters
/*
    1) up - How many floors will be traveled up
    2) down - How many floors will be traveled down 
    3) ceil - Although the problem said theirs no cieling or floor im gonna set one
    4) floor 
*/

/*
    Using the up and down, conditions will be used to 
    
    * Declare the height of the building 
        ** the height will be used to set constraints 
// */

const fs = require("node:fs")
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("");
const res = INPUT.reduce((flr, dir) => dir === "(" ? ++flr : --flr, 0);

console.log(typeof(res));
console.log(res)


// function map(u, d){

//     const directions = [];
//     const up = "(";
//     const down = ")";

//     for(i = 0; i < u; i++) directions.push(up);
//     for(x = 0; x < d; x++) directions.push(down);

//     for(let m = directions.length - 1; m > 0; m--){
//         const j = Math.ceil(Math.random() * (m-1));
//         [directions[m], directions[j]] = [directions[j], directions[m]];
//     }

//     return directions
// }

// function stairCase(up, down){

//     console.log({ up: up, down: down });

//     const directions = map(up, down);
//     console.log(directions)

//     let level = 0;

//     for(const char of directions){
//        level += char === "(" ? 1 : -1 
//     }    
//     if(level === 0){
//         console.log(`Santa is still on the lobby floor.`);
//     }else if(level < 0){
//         console.log(`Santa is currently on Basement Level ${level}`);
//     }else{
//         console.log(`Santa is currently on Floor ${level}`);
//     }
// }

// stairCase(20, 10);