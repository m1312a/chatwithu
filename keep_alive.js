var http = require('http');

http.createServer(function (req, res){
  res.write("alove");
  res.end();
})