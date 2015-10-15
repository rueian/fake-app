'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Post = sequelize.define('Post', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    },
    commentCount: {
      type: Sequelize.BIGINT,
      field: 'comment_count'
    }
  }, {
    tableName: 'posts'
  });

  return Post;
};
