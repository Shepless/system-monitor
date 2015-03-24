var util = require('util'),
    path = require('path'),
    jsonFile = require('jsonfile'),
    prettysize = require('prettysize'),
    processLookup = require('ps-node'),
    configPath = path.normalize(path.join(process.cwd(), 'config.json')),
    config = jsonFile.readFileSync(configPath),
    PushBullet = require('pushbullet'),
    eventManager = require('./event-manager'),
    eventTypes = require('./event-types'),
    pusher,
    devices,
    hasCooledDown = true;

exports.init = function () {
    pusher = new PushBullet(config.PUSHBULLET_API_KEY);

    pusher.devices(function (error, response) {
        devices = response.devices;
    });

    eventManager.on(eventTypes.LOW_MEMORY, function (data) {
        if (devices && hasCooledDown) {
            hasCooledDown = false;

            processLookup.lookup({}, function (error, processes) {

                var message = util.format('Total Memory: %s \nFree Memory: %s \nRunning Processes: \n\n %s',
                    prettysize(data.totalmem), prettysize(data.freemem), processes.map(function (process) {
                        return util.format('pid: %d -- command: %s', process.pid, process.command);
                    }).join('\n'));

                devices.forEach(function (device) {
                    setTimeout(function () {
                        hasCooledDown = true;
                    }, 1.8e+6);

                    pusher.note(device.iden, 'Low Memory Warning!', message);
                });
            });
        }
    });
};