/*
    Write groupBy(arr, key) that groups an array of objects by a given key
    
    groupBy([
        { name: 'Alice', dept: 'eng' },
        { name: 'Bob', dept: 'design' },
        { name: 'Carol', dept: 'eng' }
    ], 'dept')
    
    { eng: [{...Alice}, {...Carol}], design: [{...Bob}] }
*/

const groupBy =[
    { name: 'Alice', dept: 'eng' },
    { name: 'Bob', dept: 'design' },
    { name: 'Carol', dept: 'eng' }
];

const reduced = groupBy.reduce((acc, val) => {
    const key = val.dept;
    return{
        ...acc,
        [key]: [...(acc[key] ?? []), val]
    }
}, []);


console.log(reduced)