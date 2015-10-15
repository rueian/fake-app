'use strict';

const logger = require('../../logger');

function log(start, req, res, err) {
  let data = {
    type: 'http',
    start: start,
    header: res.header,
    status: res.status,
    length: res.length,
    body: res.body,
    url: req.url,
    ip: req.ip
  };

  if (err) {
    logger.error(data, err);
  } else {
    logger.info(data);
  }
}

module.exports = function*(next) {
  this.log = logger;

  let start = new Date();

  try {
    yield next;
  } catch (err) {
    log(start, this.request, this.response, err);
    throw err;
  }

  log(start, this.request, this.response);
};
