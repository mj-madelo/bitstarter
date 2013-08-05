var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var j = fs.readFileSync('index.html', 'utf-8');
  var k = j.toString();
  response.send(j);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
