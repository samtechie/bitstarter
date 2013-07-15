var express = require('express');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
var buffer = new Buffer(10);
buffer = fs.readFileSync('index.html');
var string1 = buffer.toString();
response.send(string1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
