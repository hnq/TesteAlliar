'use strict';
const { Model, DataTypes } = require('sequelize');
const { db } = require("../concerns/database");

class Laboratorio extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
Laboratorio.init({
  nome: DataTypes.STRING,
  endereco: DataTypes.STRING,
  status: DataTypes.INTEGER
}, {
  sequelize: db,
  modelName: 'Laboratorio',
  tableName: 'Laboratorios'
});

module.exports = Laboratorio;