'use strict';

const render = require('./render');

exports.middleware = function*(next) {
  try {
    yield next;
  } catch (err) {
    this.status = 500;

    render.call(this, {
      message: 'Internal server error'
    });

    if (this.log) this.log.error(err);
  }
};
