// logger.js
const EventEmitter = require('events');

class Logger extends EventEmitter {}

const logger = new Logger();

logger.on('note-added', (msg) => {
  console.log('Event Logged:', msg);
});

module.exports = logger;
