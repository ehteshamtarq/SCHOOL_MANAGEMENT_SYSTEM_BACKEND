require("dotenv").config();
const http = require('http');
const app = require("./app/app");
require("./config/dbConnect");


const PORT = process.env.port || 5000


// server
const server = http.createServer(app)
server.listen(PORT, console.log(`Server is running ${PORT}`));
//uonkWmhA8mGCkZ1Y
