const { DataTypes } = require('sequelize');

const database = require('../db');

const Previsao = database.define('previsao', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cidade: DataTypes.STRING,
  temperatura: DataTypes.DECIMAL(10,2),
  temperaturaMaxima: DataTypes.DECIMAL(10,2),
  temperaturaMinima: DataTypes.DECIMAL(10,2),
  descricao: DataTypes.STRING,
  data: DataTypes.DATEONLY
},{
  tableName: 'previsao'
});

module.exports = Previsao;


