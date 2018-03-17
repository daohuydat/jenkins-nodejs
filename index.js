var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello Jenkins!'); //write a response to the client
  res.end(); //end the response
}).listen(8888); //the server object listens on port 8080
console.log('Server started at port 8888');