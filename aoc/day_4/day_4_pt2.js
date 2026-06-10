const crypto = require("crypto");


for(i = 0; i < Infinity; i++){
	const str = "ckczppom";
	const newStr = str.concat(i);
	const hash = crypto.createHash("md5").update(newStr).digest("hex");

	if(hash.toString().slice(0,6) === "000000"){
		console.log("FOUND:", i);
		break;
	}

}	
