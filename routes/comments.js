'use strict';

const Sequelize = require('sequelize');
const render = require('./common/render');
const models = require('../models');
const faker = require('faker');
const shuffle = require('../utils').shuffle;
const looper = require('../utils').looper;

const sequelize = models.sequelize;
const Post = models.Post;
const Comment = models.Comment;

exports.list = function* generate() {
  let postId = shuffle(yield Post.findAll({
    where: {
      commentCount: {
        $gte: 1
      }
    },
    attributes: ['id']
  }))[0].id;

  let comments = yield Comment.findAll({
    where: {
      postId: postId
    }
  });

  this.status = 200;
  render.call(this, comments);
}

exports.generate = function* generate() {
  let postId = shuffle(yield Post.findAll({
    attributes: ['id']
  }))[0].id;

  let comments = yield looper(function*() {
    let post, comment, transaction, options;
    try {
      transaction = yield sequelize.transaction({
        autocommit: false,
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
      });
      options = {
        transaction: transaction,
        lock: transaction.LOCK.UPDATE
      };

      post = yield Post.findById(postId, options);

      let floor = + post.get('commentCount') + 1;

      post.set('commentCount', floor);
      yield post.save(options);

      comment = yield Comment.create({
        postId: post.get('id'),
        content: faker.lorem.paragraphs(),
        floor: floor
      }, options);

    } catch (e) {
      transaction.rollback();
      throw e;
    }
    transaction.commit();

    return comment;
  });

  this.status = 200;
  render.call(this, comments);
}
