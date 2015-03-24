var monitor = require("os-monitor"),
    eventManager = require('./event-manager');

monitor.on('monitor', eventManager.emit.bind(eventManager, 'activity'));
monitor.on('loadavg1', eventManager.emit.bind(eventManager, 'load average one'));
monitor.on('loadavg2', eventManager.emit.bind(eventManager, 'load average two'));
monitor.on('loadavg3', eventManager.emit.bind(eventManager, 'load average three'));
monitor.on('freemem', eventManager.emit.bind(eventManager, 'low memory'));

exports.start = monitor.start.bind(monitor, {
    delay: 1000,
    freemem: 1000000000,
    immediate: true
});