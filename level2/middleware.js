var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

// Load html page using express
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/public/index.html') ;
// });


// .use will serve files from folder without using dirname etc.
// defaults to serve index.html
app.use(express.static('public'));

app.get('/blocks', function(request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

app.listen(process.env.PORT, function() {
    console.log(process.env.PORT);
});