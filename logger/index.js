'use strict';

const bunyan = require('bunyan');
const ConsoleStream = require('./ConsoleStream');

let streams = [
  {
    level: process.env.NODE_ENV === 'development' ? 'trace' : 'warn',
    stream: new ConsoleStream(),
    type: 'raw'
  }
];

const logger = bunyan.createLogger({
  name: 'fake-app',
  streams,
  serializers: {
    err: bunyan.stdSerializers.err
  }
});

module.exports = logger;
