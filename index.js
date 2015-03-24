var server = require('./src/server'),
    sockets = require('./src/socket'),
    monitor = require('./src/monitor'),
    pushbullet = require('./src/push-bullet');

server.listen(3000, function () {
    monitor.start();
    pushbullet.init();
});