/*
    The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

    The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect 
    bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

    For example:

        A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.


        A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.

    How many total feet of ribbon should they order?
*/


const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("\n");

let total = 0;
let acc = 0;
let r = 0;
let arr = [];

// iterate over gift demonsions (1000)
for(let i = 0; i< INPUT.length; i++){
    const lwh = INPUT[i].split("x"); 
    const L = Number(lwh[0]);
    const W = Number(lwh[1]);
    const H = Number(lwh[2]);

    r = L*W*H

    let f = Infinity;
    let g = Infinity;    

    for(let z = 0; z <= lwh.length - 1; z++){
        const val = Number(lwh[z]);
        if(val <  f){
            g = f
            f = val;
        }else if(val < g){
            g = val
        }
    }
    arr.push([f, g, r])
}

  for(let val = 0; val< arr.length; val++){
        total +=  (2 * arr[val][0])  +  (2 * arr[val][1]) + arr[val][2]
    }
    console.log(total)

// 3783758