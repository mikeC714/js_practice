// Write a function fizzBuzz(n) that returns an array of strings 1→n. Multiples of 3 → 'Fizz', 5 → 'Buzz', both → 'FizzBuzz'.

let wrdArr = [];

for(let i = 0; i<20; i++){
    if(i % 3 && i % 5 === 0){
        wrdArr.push(`${i}: FizzBuzz`)
    }
    else if(i % 3 === 0){
        wrdArr.push(`${i}: Fizz`);
    }else if(i % 5 === 0){
        wrdArr.push(`${i}: Buzz`);
    }
}
console.log(wrdArr);