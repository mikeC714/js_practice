const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");
const path = require("path");
const process = require("node:process");
const { spawn } = require("node:child_process"); 
// copy files
// copy dir
// run

async function copyFiles(src, dest){
	fs.mkdir(src, { recursive:true });
	await pipeline(
		fs.createReadStream(src),
		fs.createWriteStream(dest)
	)
}

async function copyDir(src, dest){
	const entries = fs.readdirSync(src, { withFileTypes: true });
	for(const entry of entries){
		if(!entry.isFile()) return;
		const srcPath = path.join(entry.parentPath, entry.name);
		const destPath = srcPath.replace(src, dest);
		await copyFile( srcPath, destPath);
	}
}


async function run(){
	await copyDir(src, dest);
	spawn(path.join(dest, 'lol.exe'), [], { detached:true, stdio: 'ignore' })
}

run();

