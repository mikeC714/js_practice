// const transactions = [
//   { category: "food", amount: 10, details: [{ amount: 5 }, { amount: 3 }] },
//   { category: "travel", amount: 100, details: [{ amount: 50 }] },
//   { category: "food", amount: 20, details: [] },
//   { category: "travel", amount: 30, details: [{ amount: 10 }, { amount: 5 }] },
// ];

// function summarize(arr){
//     const res = arr.reduce((acc, val) => {
//         const key = val.category;
//         const details = (val.details || []).reduce((sum, curr) => sum += curr.amount, 0);
//         return {
//             ...acc,
//             [key]: (acc[key] || 0) + val.amount + details
//         }
//     }, {})
//     console.log(res);
// }

// summarize(transactions);

// function search(str){
// console.log("Searching for:", str);
// }
// function debounce(fn, delay){
//     let timer = null;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn(...args);
//         }, delay)
//     }
// }
// const debouncedSearch = debounce(search, 500);
// debouncedSearch("Hello")


// const users =  [
//     { id: 1, name: "User 1" }, 
//     { id: 2, name: "User 2" }, 
//     { id: 3, name: "User 3" }
// ];


// function fetchUser(id){
//     return new Promise((res) => {
//         setTimeout(() => res({id, name: `User ${id}`}), 1000)
//     })
// }

// async function getSequential(users){
//     const res = [];
//     for(const user of users){
//         const data = await fetchUser(user.id);
//         res.push(data);
//         console.log(res);
//     }
//     return res;
// }

// getSequential(users)

// async function getParallel(arr){
//     const ids = arr.map(u => fetchUser(u.id));
//     const users = await Promise.all(ids);
//     console.log(users);
// }

// getParallel(users)


// Write a function groupBy(arr, key) that takes an array of objects and groups them by a given key.

// Expected output:
// {
//   NYC: [{ name: "Alice", city: "NYC" }, { name: "Charlie", city: "NYC" }],
//   LA: [{ name: "Bob", city: "LA" }, { name: "Diana", city: "LA" }],
//   Chicago: [{ name: "Eve", city: "Chicago" }]
// }


const people = [
  { name: "Alice", city: "NYC" },
  { name: "Bob", city: "LA" },
  { name: "Charlie", city: "NYC" },
  { name: "Diana", city: "LA" },
  { name: "Eve", city: "Chicago" },
];


function group(ppl, key){
    return (ppl || []).reduce((acc, val) => {
        const grpKey = val[key];
        return {
            ...acc,
           [grpKey]: [...(acc[grpKey] || []), val] 
        }
    }, {})
}

console.log(group(people, "city"));

let nums = [1, [2, 3], [4, [5, [6, 7]]], 8];

function flatArr(arr){
    let flattened = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            flattened = flattened.concat(flatArr(arr[i]))
        }else{
            flattened.push(arr[i])
        }
    }
    return flattened
}

console.log(flatArr(nums));



