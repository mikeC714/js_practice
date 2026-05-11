// FIX AND FIND THE BUG COUNTER NEVER CHANGES


// FIX AND FIND THE BUG COUNTER NEVER CHANGES

/*

REASON: "count + 1"

    Doing count + 1 in this scenario is simply trying to return a calculation without storing


SOLUTION: "count++ or count += 1"

    Instead of just doing a calculation now we're storing the value within the count so calling it twice leads to count = 2
    
*/



let count = 0;
function increment() {
  count++;
}
increment();
increment();
console.log(count); // expected: 2, actual: 0