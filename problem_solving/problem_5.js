// Write flatten(arr) that fully flattens a deeply nested array without using Array.flat()


const arr = [1, [2, [3, [4]], 5]];

function recursive(arr){
    const newArr = [];

    arr.forEach(a => {
        if(Array.isArray(a)){
            newArr.push(...recursive(a))
        }else{
            newArr.push(a)
        }
    })
    return newArr;
}

console.log(recursive(arr))
