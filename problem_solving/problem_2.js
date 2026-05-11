// LOGGING SAME VALUE SHOULD BE LOGGING 1,2,3

/*
    PROBLEM: "var declaration"
    
    var being function scoped is leading to the issue of logging 3 3 times. How function scope affected the for block by hoisting i sharing it across all iterations, 
    leading to the loop being finished by the time the block is logged. 

    SOLUTION: "Declare i with let"

    let is block scoped meaning on each iteration a new refrence is created
*/


for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// logs: 3, 3, 3 — should log 0, 1, 2