'use strict';

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const PostComment = sequelize.define('PostComment', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    postId: {
      type: Sequelize.BIGINT,
      field: 'post_id'
    },
    floor: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  }, {
    tableName: 'comments'
  });

  return PostComment;
};
