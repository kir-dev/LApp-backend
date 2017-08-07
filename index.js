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
    connection.on('coords', function(coords){
        connection.broadcast.emit('coords', coords);
        console.log("coord: " + coords);
    });
    connection.on('start_coords', function(start_coords){
        socket.emit('start_coords', start_coords);
        console.log("start_coords: " + start_coords);
    });
    connection.on('color', function(color){
        socket.emit('color', color);
        console.log("color: " + color);
    });
    connection.on('brush', function(brush){
        socket.emit('brush', brush);
        console.log("brush: " + brush);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000 port');
});
