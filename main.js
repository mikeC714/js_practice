const fs = require("node:fs");
const { Buffer } = require("node:buffer");
const path = require("path");
const process = require("node:process");

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


// const people = [
//   { name: "Alice", city: "NYC" },
//   { name: "Bob", city: "LA" },
//   { name: "Charlie", city: "NYC" },
//   { name: "Diana", city: "LA" },
//   { name: "Eve", city: "Chicago" },
// ];


// function group(ppl, key){
//     return (ppl || []).reduce((acc, val) => {
//         const grpKey = val[key];
//         return {
//             ...acc,
//            [grpKey]: [...(acc[grpKey] || []), val] 
//         }
//     }, {})
// }

// function group(arr, key){
//     return (arr ?? []).reduce((acc, val) => {
//         return{
//             ...acc,
//             [val[key]]: [...acc[val[key]] ?? [], val] 
//         }
//     }, {})
// }

// console.log(group(people, "city"));

// let nums = [1, [2, 3], [4, [5, [6, 7]]], 8];

// function flatArr(arr){
//     let flattened = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flattened = flattened.concat(flatArr(arr[i]))
//         }else{
//             flattened.push(arr[i])
//         }
//     }
//     return flattened
// }

// console.log(flatArr(nums));



// const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

// let match = null;
// let wantedValue = 2

// for(const [_, value] of map){
//     if(value === 2){
//         match = value
//         break;
//     }
// }
// console.log(match)


// const arr = ["one piece", "two", "three"];

// function validateCom(input= ""){
//     const valid = arr.find(com => com === input);
//     if(!valid){
//         console.log('Invalid command. Use "-help" to see valid commands.');
//         return;
//     }
//     return true;
// }


// function someWrd(input){
//     if(!validateCom(input)){
//         return;
//     }
//     console.log(input);
//     console.log(true);
// }

// someWrd("one piece")


// const cars = [
//   { brand: "Audi" ,model: "R8", year: "2018", color: "Black" },
//   { brand: "BMW" ,model: "E60 M5", year: "2009", color: "Black" },
//   { brand: "Audi" ,model: "B5 S4", year: "2000", color: "Maroon" },
//   { brand: "Honda" , model: "Civic EJ1", year: "1992", color: "Orange" },
//   { brand: "Audi" ,model: "C7 RS4", year: "2007", color: "Royal Blue" },
// ];

// function grpCars(arr, key){
//     return (arr ?? []).reduce((acc, val) => {
//         return {
//             ...acc,
//             [val[key]]: [...(acc[val[key]] ?? []), val],
//         };
//     }, {});
// }
// console.log(JSON.stringify(grpCars(cars, "color"), null, 2))




// const arr = [1,2,3,4,5];

// function timesTwo(arr= []){
//    return arr.reduce((acc, val) => {
//         acc.push(val * 2);
//         return acc
//    }, [])
// }

// function timesThree(arr){
//     return arr.map(num => num *3)
// }

// function timesFour(arr){
//     const newArr = [];
//     arr.forEach((num) => {
//         newArr.push(num *4);
//     })
//     return newArr;
// }

// console.log(timesTwo(arr));
// console.log(timesThree(arr));
// console.log(timesFour(arr))




// class Car{
//     constructor(brand, model, year){
//         brand = brand; 
//         model = model; 
//         year = year;
//     }

// //     newCar(){
// //         const car = `${this.brand} ${this.model}, ${this.year}`
// //         console.log(car);
// //     }
// // }
//
//
// // function wrds({  }){
// //     console.log(`${wrd1}`)
// //     console.log(`${wrd2}`)
// //     console.log(`${wrd3}`)
// //     console.log(`${wrd4}`)
// // };
//
// // wrds({});
//
//
// // let boo = false;
//
// // function call(){
// //     boo = true
// // }
//
// // call(boo);
// // console.log(boo)
//
//
// // class HomePage{
// //     #state = {};
// //     constructor(){
// //         this.header = document.createElement('header');
// //         this.body = document.createElement('body');
// //         this.footer = document.createElement('footer');
// //         this.display = document.createElement('p');
// //     }
//
// //     monitorState(initialValue){
// //         this.#state = initialValue;
//
// //         const setter = (newValue) => {
// //             this.#state = { ...this.#state, ...newValue };
// //             this.#render();
// //             return this.#state;        
// //         }
//
// //         const getter = () => this.#state;
//
// //         return [getter, setter];
// //     }
//
// //     #render(){
// //         return this.display.textContent = JSON.stringify(this.#state);
// //     }
// // }
//
//
// // const arr = [{id:1, status: "completed", created_at: 2}, {id:2, status: "approved", created_at: 1}, {id:3, status: "pending", created_at: 5}, {id:4, status: "approved", created_at: 10}, {id:5, status: "approved", created_at: 20}];
//
// // function monitor(arr){
// //     const filtered = arr.filter((el) => {
// //         if(el.status === "approved" && el.created_at > 7){
// //             return el.status = "unpaid"; 
// //         }
// //     })
// //     console.log(filtered);
// // }
//
// // monitor(arr);
//
// //
// // async function createDir(){
// //     let status;
// //     try{
// //         const absolute = path.join(__dirname);
// //         await fs.promises.mkdir(absolute, { recursive: true });
// //         status = "SUCCESS"
// //         return absolute;
// //     }catch(err){
// //         status = "FAILED";
// //         throw new Error(err.message);
// //     }finally{
// //         console.log(`${status}, Attempt to create dir complete.`)
// //     }
// // }
// //
// // function getAllDirs(dir){
// //     const entries = fs.readdirSync(dir, { encoding: 'utf8', withFileTypes: true });
// //     const dirs = [];
// //
// //     for(const entry of entries){
// //         if(entry.isDirectory()){
// //             const fullPath = path.join(dir, entry.name);
// //             dirs.push(fullPath);
// //             const nested = getAllDirs(fullPath);
// //             dirs.push(...nested);
// //         }
// //     }
// //
// //     return `${dirs}`;
// // }
// //
// //
// // (async function writeDir(){
// //     const dir = await createDir();
// //     try{
// //         await fs.promises.writeFile(path.join(dir, 'test.txt'), getAllDirs(dir));
// //     }catch(err){
// //         throw new Error(err.message);
// //     }finally{
// //         console.log(`Attempt to write file in ${dir} is complete.`);
// //     }
// // })()
// //
// //
// //
// //
// //
// //
// //
// // const arr = [{id:1,  name: "Joe"},{id:2,  name: "Smith"},{id:3,  name: "Thomas"},{id: 4, name: "Steve"}];
// //
// // const users = arr.map(usr =>  usr.id)
// //
// //
// // console.log(users);
// //
//
//
// const one = false;
// const two = false;
//
// const three = [one, two];
//
// if(three.some(val => val === true)){ console.log("Something is true");}else{console.log("Both false")}
//
//
//
// async function createDir(){
//     let status;
//     try{
//         const absolute = path.join(__dirname);
//         await fs.promises.mkdir(absolute, { recursive: true });
//         status = "SUCCESS"
//         return absolute;
//     }catch(err){
//         status = "FAILED";
//         throw new Error(err.message);
//     }finally{
//         console.log(`${status}, Attempt to create dir complete.`)
//     } }
//
// function getAllDirs(dir){
//     const entries = fs.readdirSync(dir, { encoding: 'utf8', withFileTypes: true });
//     const dirs = [];
//
//     for(const entry of entries){
//         if(entry.isDirectory()){
//             const fullPath = path.join(dir, entry.name);
//             dirs.push(fullPath);
//             const nested = getAllDirs(fullPath);
//             dirs.push(...nested);
//         }
//     }
//
//     return `${dirs}`;
// }
//
//
// (async function writeDir(){
//     const dir = await createDir();
//     try{
//         await fs.promises.writeFile(path.join(dir, 'test.txt'), getAllDirs(dir));
//     }catch(err){
//         throw new Error(err.message);
//     }finally{
//         console.log(`Attempt to write file in ${dir} is complete.`);
//     }
// })()
//
//
//
//
//
//
//
// const arr = [{id:1,  name: "Joe"},{id:2,  name: "Smith"},{id:3,  name: "Thomas"},{id: 4, name: "Steve"}];
//
// const users = arr.map(usr =>  usr.id)
//
//
// console.log(users);
//





// const str = "Hello World!";
// const uStr = Buffer.from(str, "utf-8");
// const convertedBack = uStr.toString();
//
//
// console.log(uStr.length, str);
// console.log(convertedBack)
	//
	//
	// const strObj = '{"name": "Jeff", "dob": "12/2/2002"}' 
	// const jsonStr = JSON.stringify({name: "Jeff", dob: "12/2/2002"});
	// const parsed = JSON.parse(strObj); 
	// console.log(parsed);
	// console.log(jsonStr); 


//
// 	const obj = {};
// 	const els = [1,2,3,4]
//
//
// 	console.log(obj)
//
//
// const MAGIC = 0x8008;
//
// const buf = Buffer.alloc(2);
// buf.writeUint16BE(MAGIC);
// console.log(buf);
//
//
// const hex = 0x02;
// const num = 2;
//
// if(num === hex) console.log("true");
//


function test(magic, payload={}){
	return [magic, JSON.stringify(payload)];
}
const magic = 2;
const pay = {num1: 2, num2: 1};
console.log(test(magic, pay))


const arr = [{name: "steve"},{name: "mike"},{name: "jon"},{name: "jones"}, {age: 20}]


function nameExport(arr){
	return arr.reduce((arr, el) => {
		if(el.name) arr.push(el.name);
		return arr;
	},[])
}



console.log(nameExport(arr));




