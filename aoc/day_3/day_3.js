const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("");


/*
Santa is delivering presents to an infinite two-dimensional grid of houses.

He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.

However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?

For example:

    > delivers presents to 2 houses: one at the starting location, and one to the east.
    ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
    ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

*/


/*
     ^ NORTH
     v SOUTH
     > RIGHT
     < LEFT

     All directions can be thought of as a grid 
     
     NORTH y axis + 1
     SOUTH y axis - 1
     WEST x axis - 1 
     EAST x axis + 1 
*/


let single = ["0x0"];
let coords = {x: 0, y: 0};
let newCoords = {x: 0, y: 0};    

for(let i = 0; i < INPUT.length; i++){
    if(INPUT[i] === "^") newCoords = {x: coords.x, y: coords.y +1};
    if(INPUT[i] === "v") newCoords = {x: coords.x, y: coords.y -1};
    if(INPUT[i] === ">") newCoords = {x: coords.x +1, y: coords.y};
    if(INPUT[i] === "<") newCoords = {x: coords.x -1, y: coords.y}

    const key = `${newCoords.x}x${newCoords.y}`;

    if(!single.includes(key)){
        single.push(`${newCoords.x}x${newCoords.y}`)
    }
    coords = newCoords  // -> GIVES THE CURRENT STATE OF COORDS 
    console.log(coords)
}

console.log(single.length)
