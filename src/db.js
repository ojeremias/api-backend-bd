const { Sequelize } = require('sequelize');

const database = new Sequelize('filmes-ifal', 'root', 'mysql123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = database;