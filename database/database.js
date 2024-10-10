const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('Connecting to DB =', process.env.DB_URI);

const sequelize = new Sequelize(process.env.DB_URI);

module.exports = sequelize;