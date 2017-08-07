var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('<h1>Hello world</h1>');
});

socket.on('connection', function(connection){
    console.log('a user connected');
    connection.on('coords', function(msg){
        socket.emit('coords', msg);
        console.log("coord: " + msg);
    });
    connection.on('start_coords', function(msg){
        socket.emit('start_coords', msg);
        console.log("start_coords: " + msg);
    });
    connection.on('color', function(color){
        socket.emit('color', color);
        console.log("color: " + color);
    });
});



http.listen(8080, function(){
    console.log('listening on *:8080');
});