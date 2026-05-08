const fs = require("node:fs");
const INPUT = fs.readFileSync("./input.txt", "utf-8").split("\n");



/* 
        --- Day 2: I Was Told There Would Be No Math ---
        
        The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.
        
        Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.
        
        For example:
        
            A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
            A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
        
        All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
 */
// acc used to monitor the runnning total
let acc = 0;

// iterate over gift demonsions (1000)
for(let i = 0; i< INPUT.length; i++){

    /*
        access data point at index i
        (e.g 
            const arr = [1,2,3,4,5];
            for(let i = 0; i < arr.length; i++){
                console.log(`INDEX ${i}:` , arr[i]);
            }

        OUTCOME:
                INDEX 0: 1
                INDEX 1: 2
                INDEX 2: 3
                INDEX 3: 4
                INDEX 4: 5  

        )

        Since i starts at 0 and increments up to (but not including) arr.length,
        it visits every valid index, giving us access to each element in order.
    */
    const lwh = INPUT[i].split("x");

    // declare L/W/H to their desired index and converting the strings into number 
    const W = Number(lwh[1]);
    const H = Number(lwh[2]);
    const L = Number(lwh[0]);

    // Add the value of the total amount (area and slack) of wrapping paper to acc 
    acc += 
        (2* (L * W)) +
        (2* (W * H)) +
        (2* (H * L)) +
        Math.min(L * W, W * H, H * L)
}


console.log(acc) // 1588178
