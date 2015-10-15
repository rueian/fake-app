'use strict';

const Sequelize = require('sequelize');
const router = require('koa-router')();
const render = require('./common/render');
const models = require('../models');

const sequelize = models.sequelize;
const posts = require('./posts');
const comments = require('./comments');
// Error recovery
router.use(require('./common/error').middleware);

router.get('/', function*() {
  this.status = 200;
  render.call(this, {
    status: 'ok'
  });
});

router.get('/sync', function*() {
  // DON'T DO THIS IN REAL PRODUCT.
  yield models.sequelize.sync();

  this.status = 200;
  render.call(this, {
    status: 'ok'
  });
});

router.get('/posts/list', posts.list);
router.get('/posts/generate', posts.generate);

router.get('/comments/list', comments.list);
router.get('/comments/generate', comments.generate);

module.exports = router.routes();
