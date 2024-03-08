const http = require('http');
const app = require("./app/app");


const PORT = process.env.port || 5000


// server

const server = http.createServer(app)
server.listen(PORT, console.log(`Server is running ${PORT}`));