'use strict';

const koa = require('koa');

const app = koa();

app.env = process.env.NODE_ENV || 'development';
app.proxy = true;

// Middlewares
app.use(require('./routes/middlewares/logger'));

app.use(require('./routes'));

// Catch errors
app.on('error', function(err) {
  this.log.error(err);
});

app.use(require('./routes/middlewares/notFound'));

module.exports = app;
