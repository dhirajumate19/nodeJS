const http = require("node:http");
const PORT = 8000;

//create method for server and handler request and response object
const handlerServer = (req, rep) => {
  //   console.log("hello\n Welcome to our first server");
  rep.end("hello\n Welcome to our first server");
};

//Creating server using http create method
const server = http.createServer(handlerServer);

//listerning server detail like port and other detail
server.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`);
});
