var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var j = fs.readFileSync('./index.html', 'utf8');
  var k = j.toString();
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
