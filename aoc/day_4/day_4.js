const crypto = require("crypto");



for(i = 0; i < Infinity; i++){
    const str = "ckczppom"
    const hash = crypto.createHash('md5').update("ckczppom").digest('hex')
    const newStr = str.concat(i);

    console.log(hash)

    if(hash.toString().slice(0,5) === "00000"){
        console.log(newStr);
        break
    }

}
