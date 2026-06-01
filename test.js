const fsp = require("node:fs/promises");
const fs = require("node:fs");
const path = require("path");
const process = require("node:process");

const args = [process.argv[2], process.argv[3], process.argv[4]];

(function mkdir(name){
	if(!name) return;
	try{
		const exists = fs.existsSync(name);
		if(exists) return exists;

		const dir = fs.mkdirSync(name, { recursive: true })
		if(dir){ console.log("Successfully created dir") }
	}catch(err){
		throw new Error(err.message);
	}finally{
		console.log("Finished mkdir");
	}
})(args[0]);


function writeToDir(dir){
	if(!dir){
		console.log("Failed to provide dir"); 
		return;
	}
	try{
		const content = "Hello World!";
		fs.writeFileSync(`${dir}/test.txt`, content, "utf8");
	}catch(err){
 		throw new Error(err.message);	
	}finally{
		console.log(`Finished attempt to write to ${dir}`);
	}
}
	
writeToDir(args[0]);

async function recurs(dir, home){
	const stat = fs.statSync(dir);
	if(!stat.isDirectory()) return;
	try{
		const contents = [];

		const entries = await fsp.readdir(dir, { withFileTypes: true, recursive: true });
		
		for(const entry of entries){
			if(!entry.isFile()) continue;
			const filePath = path.join(dir, entry.name);
			const content = await fsp.readFile(filePath, "utf8"); 
			contents.push(content);
		};

		await fsp.writeFile(`${home}/test3.txt`, contents.join("\n"), "utf8");
	}catch(err){
		throw err;
	}finally{
		console.log("Finished writing to new file");
	}
}

recurs(args[0], args[1]);


