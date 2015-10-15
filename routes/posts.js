'use strict';

const Sequelize = require('sequelize');
const render = require('./common/render');
const models = require('../models');
const faker = require('faker');
const looper = require('../utils').looper;
const Post = models.Post;

exports.list = function*() {
  let posts = yield Post.findAll();

  this.status = 200;
  render.call(this, posts);
}

exports.generate = function*() {
  let posts = yield looper(function*() {
    return Post.create({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs()
    });
  });

  this.status = 200;
  render.call(this, posts);
}
