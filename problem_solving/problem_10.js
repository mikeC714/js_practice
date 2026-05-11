/*
    Merge two arrays and remove duplicates. Return sorted ascending.
    mergeDedupe([3, 1, 4, 2], [2, 5, 1, 6])
    // [1, 2, 3, 4, 5, 6]

*/

const arrs = [[3,1,4,2], [2,5,1,6]];

function mergeDupe(arrs){
    const flat = arrs.flat()
    const u = [...new Set(flat)]
    return u.sort((a,b) => a-b)
}

console.log(mergeDupe(arrs));


