'use strict';
const { Model, DataTypes } = require('sequelize');
const { db } = require("../concerns/database");


class Exame extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
Exame.init({
  nome: DataTypes.STRING,
  tipo: DataTypes.STRING,
  status: DataTypes.INTEGER
}, {
  sequelize: db,
  modelName: 'Exame',
  tableName: 'Exames',
});

module.exports = Exame;