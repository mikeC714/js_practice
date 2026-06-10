const net = require("node:net");
const sendToUser = require("./method.js")

const USERS = new Map();


const server = net.createServer((socket) => {
	socket.setEncoding('utf-8');
	socket.on('data', (chunk) => {
		const data = JSON.parse(chunk.toString());
		switch (data.type){
			case("CONNECTION"):
				console.log(`${data.userID} has connnected to server`);	
			break;
			case("AUTH"): 
				USERS.set(data.userID, socket)
			break;
			case("MSG"):
				const userB = USERS.get(data.to);
				if(userB){
					userB.write(`${data.userID}: ${data.msg}`);
				}else return;
			break;
			case("DISCONNECT"):
				USERS.delete(data.userID);
				console.log(`${data.userID} has disconnected.`)
				socket.end();
			break;
		}
		socket.on('error', (err) => {
			console.log(err);
			throw err;
		})
	})
}).listen(3000, () => console.log("Server bound."));
