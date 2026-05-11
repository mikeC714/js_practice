// FUNCTION IS SUPPOSED TO RETURN A NEW ARRAY BUT CHANGES THE ORIGINAL AS WELL.


/* 
    PROBLEM: "moving arr const newArr = arr;"
    Instead of copying the content within arr it's elements were just being moved making newArr the original array

    SOLUTION: "..."
    Instead of moving the elements we can just copy using the spread operator cloning the content within arr.
*/

function addItem(arr, item) {
    const newArr = [];
    newArr.push(...arr, item);
    return newArr;
}
const original = [1, 2, 3];
const result = addItem(original, 4);
console.log(original, result); // [1, 2, 3, 4] — should still be [1, 2, 3]