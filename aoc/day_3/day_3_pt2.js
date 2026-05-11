const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("");
/*
    The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

    Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), 
    then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

    This year, how many houses receive at least one present?
    For example:

    ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
    ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
    ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

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

// SANTA
let santaCoords = {x: 0, y: 0};    
for (let i = 0; i < INPUT.length; i++) {
    if (i % 2 === 0) {
        if(INPUT[i] === "^") santaCoords = {x: santaCoords.x, y: santaCoords.y +1};
        if(INPUT[i] === "v") santaCoords = {x: santaCoords.x, y: santaCoords.y -1};
        if(INPUT[i] === ">") santaCoords = {x: santaCoords.x +1, y: santaCoords.y};
        if(INPUT[i] === "<") santaCoords = {x: santaCoords.x -1, y: santaCoords.y};   
    }
    const key = `${santaCoords.x}x${santaCoords.y}`;
    if(!single.includes(key)) single.push(key);
}


// ROBO 
let botCoords = {x: 0, y: 0};
for(let i = 0; i < INPUT.length; i++){
    if(i % 2 === 1){
        if(INPUT[i] === "^") botCoords = {x: botCoords.x, y: botCoords.y +1};
        if(INPUT[i] === "v") botCoords = {x: botCoords.x, y: botCoords.y -1};
        if(INPUT[i] === ">") botCoords = {x: botCoords.x +1, y: botCoords.y};
        if(INPUT[i] === "<") botCoords = {x: botCoords.x -1, y: botCoords.y};
    }
    const key = `${botCoords.x}x${botCoords.y}`;
    if(!single.includes(key)) single.push(key);
}
console.log(single.length)