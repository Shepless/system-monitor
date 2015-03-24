var monitor = require('os-monitor'),
    eventManager = require('./event-manager'),
    eventTypes = require('./event-types');

monitor.on(eventTypes.MONITOR, eventManager.emit.bind(eventManager, eventTypes.MONITOR));
monitor.on(eventTypes.LOAD_AVERAGE_ONE, eventManager.emit.bind(eventManager, eventTypes.LOAD_AVERAGE_ONE));
monitor.on(eventTypes.LOAD_AVERAGE_TWO, eventManager.emit.bind(eventManager, eventTypes.LOAD_AVERAGE_TWO));
monitor.on(eventTypes.LOAD_AVERAGE_THREE, eventManager.emit.bind(eventManager, eventTypes.LOAD_AVERAGE_THREE));
monitor.on(eventTypes.LOW_MEMORY, eventManager.emit.bind(eventManager, eventTypes.LOW_MEMORY));

exports.start = monitor.start.bind(monitor, {
    delay: 1000,
    freemem: 1000000000,
    immediate: true
});