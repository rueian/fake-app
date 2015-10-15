'use strict';

const render = require('../common/render');

module.exports = function*(next) {
  if (this.status === 404 && this.body == null) {
    this.status = 404;
    render.call(this, {
      message: 'Not found'
    });
  }
};
