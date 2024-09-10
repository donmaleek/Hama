// config/sequelize.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

module.exports = sequelize;
