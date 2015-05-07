var express = require('express');
var cool = require('cool-ascii-faces');
var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
//  response.send(cool());
  response.send(express.static(__dirname + '/public/index2/index.html'));
});

app.get('/i', function(request, response) {
  response.send(express.static(__dirname + 'public/index/index.html'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
