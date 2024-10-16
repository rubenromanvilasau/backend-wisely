const { Sequelize } = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

console.log('Connecting to DB =', {
    database: config.database,
    username: config.username,
    host: config.host,
    dialect: config.dialect
});

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;