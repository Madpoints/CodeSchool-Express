var express = require('express');
var app = express();

app.get('/', function(request, response) {
   response.send('Hello World');
// Using node api
//   response.write('Hello World');
//   response.end();
});

// responding wiht JSON
app.get('/blocks', function(request, response) {
   var blocks = ['Fixed', 'Movable', 'Rotating'];
   response.send(blocks);
// Using .json so send objects, arrays
//   response.json(blocks);
// Redirecting to relative path , 301 status for permanent move
//   response.redirect(301, '/parts');    
}); 

app.listen(process.env.PORT, function() {
    console.log("Listening on port " + process.env.PORT);
});