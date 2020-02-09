'use strict'

const Sequelize = require('sequelize');
const config = require('./env');

const sequelize  = new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize.conn);
sequelize
        .authenticate()
        .then(function(err) {
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.sequelize = sequelize;

//Models/tables
db.products = require('../models/product.js')(sequelize, Sequelize);

module.exports = db;