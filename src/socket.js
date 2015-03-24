var server = require('./server'),
    io = require('socket.io')(server),
    eventManager = require('./event-manager'),
    eventTypes = require('./event-types');

io.on('connection', function(socket){
    eventManager.on(eventTypes.MONITOR, socket.emit.bind(socket, eventTypes.MONITOR));
    eventManager.on(eventTypes.LOW_MEMORY, socket.emit.bind(socket, eventTypes.LOW_MEMORY));
    eventManager.on(eventTypes.LOAD_AVERAGE_ONE, socket.emit.bind(socket, eventTypes.LOAD_AVERAGE_ONE));
    eventManager.on(eventTypes.LOAD_AVERAGE_TWO, socket.emit.bind(socket, eventTypes.LOAD_AVERAGE_TWO));
    eventManager.on(eventTypes.LOAD_AVERAGE_THREE, socket.emit.bind(socket, eventTypes.LOAD_AVERAGE_THREE));
});