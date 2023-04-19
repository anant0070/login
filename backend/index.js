const http = require('http');   
const app = require("./app.js");  
const PORT = 5100 || process.env.PORT;
const server = http.createServer(app);
server.listen(PORT);     