'use strict';

// Fix pg treats BIGINT as string
// https://github.com/sequelize/sequelize/issues/1774
require('pg').defaults.parseInt8 = true;

const config = require('../config');
const Sequelize = require('sequelize');
const logger = require('../logger');

const sequelize = new Sequelize(config.pg.database, config.pg.user, config.pg.password, {
  host: config.pg.host,
  port: config.pg.port,
  dialect: 'postgres',
  logging: function(msg) {
    logger.debug({type: 'sql'}, msg);
  },

  define: {
    timestamps: true
  }
});

let models = {
  Post: require('./Post')(sequelize),
  Comment: require('./Comment')(sequelize)
};

models.sequelize = sequelize;
module.exports = models;
