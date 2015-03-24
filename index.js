var server = require('./src/server'),
    sockets = require('./src/socket'),
    monitor = require('./src/monitor');

server.listen(3000, function () {
    monitor.start();
});