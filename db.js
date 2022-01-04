const Sequelize = require('sequelize');
const db = Sequelize('mysql://user:root@localhost:3306/midb');

module.exports = db;