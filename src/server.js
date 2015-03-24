var path = require('path'),
    express = require('express'),
    app = express(),
    http = require('http').Server(app);

app.use(express.static(path.normalize(path.join(process.cwd(), '/www/'))));
app.get('/', function(req, res){
    res.sendFile(path.normalize(path.join(process.cwd(), '/www/index.html')));
});

module.exports = http;