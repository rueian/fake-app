'use strict';

function render(body) {
  return renderJSON.call(this, body);
}

function renderJSON(body) {
  this.body = body;
}

exports = module.exports = render;
