/*  You have 3 API calls. Return the first one to resolve, but if it takes over 2s, reject with a timeout error.

hint: Promise.race() + a timeout promise
    const p1 = fetch('/api/a');
    const p2 = fetch('/api/b');
    const p3 = fetch('/api/c');

*/
function wrd1(){
    return new Promise((res) => {
        setTimeout(() => {
            res("A")
        }, 1_002)
    })
}


function wrd2(){
    return new Promise((res) => {
        setTimeout(() => {
            res("B")
        }, 50)
    })
}


function wrd3(){
    return new Promise((res) => {
        setTimeout(() => {
            res("C")
        }, 1_002)
    })
}

function fetchCall(){
    return new Promise((res) =>{
        setTimeout(async () => {
            const w1 = await wrd1();
            const w2 = await wrd2();
            const w3 = await wrd3();
            res(w1, w2, w3)
        }, 1_000)
    })
}

function fail(){
    return new Promise((_, rej) => {
        setTimeout(() => {
            rej(console.log("Failed to fetch data in a reasonable time."))
        }, 200)
    })
}


Promise.race([fail, fetchCall])
.then((data) => {
    console.log("FAILED TO FETCH DATA");
    return
})


fetchCall();