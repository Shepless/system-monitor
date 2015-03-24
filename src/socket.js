var server = require('./server'),
    io = require('socket.io')(server),
    eventManager = require('./event-manager');

io.on('connection', function(socket){
    eventManager.on('activity', socket.emit.bind(socket, 'activity'));
    eventManager.on('low memory', socket.emit.bind(socket, 'low memory'));
    eventManager.on('load average one', socket.emit.bind(socket, 'load average one'));
    eventManager.on('load average two', socket.emit.bind(socket, 'load average two'));
    eventManager.on('load average three', socket.emit.bind(socket, 'load average three'));
});