const net = require("node:net");
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({
	input, 
	output
});


const client = net.createConnection({port: 3000}, async () => {
	let userID = await rl.question("Enter UserID.");
	client.write(JSON.stringify({ type:"CONNECTION", userID }));
	client.write(JSON.stringify({ type:"AUTH", userID }));
	let to = await rl.question("Who'd you like to chat with?");
	client.write(JSON.stringify({ type:"CHAT", to }));
	console.clear();	

	rl.on('line', (input) => {
			if(input === "exit"){
				setTimeout(() => {
					client.write(JSON.stringify({ type:"DISCONNECT", userID }))
					client.end();				
					rl.close();
				}, 2000);
			}else if(input === "--save"){
				console.log("Saving chat logs...");
				setTimeout(() => {
					console.log("Success");
				},5000)
			};
			client.write(JSON.stringify({ type:"MSG", msg: input, to, userID}));
		})
});

client.on('data', (chunk) => {
	console.log(`\n${chunk.toString()}\n`);
	rl.prompt(true);
})


client.on('end', () => {
	rl.close();
	console.log("Client Disconnected")
})

client.on('error', (err) => {
	console.log("Connection Error:", err);
	rl.close();
})
