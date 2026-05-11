/*
    Write paginate(arr, pageSize, page) that returns the correct slice. Pages are 1-indexed.

    paginate([1,2,3,4,5,6,7,8,9,10], 3, 2)
    // [4, 5, 6]

*/

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function pagiante(arr=[], size=4, page=1){
    const start = (page - 1) * size;
    const end = page * size;

    return arr.slice(start, end)
}

console.log(pagiante(arr))

