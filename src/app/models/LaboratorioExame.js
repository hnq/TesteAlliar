'use strict';
const { Model, DataTypes } = require('sequelize');
const { db } = require("../concerns/database");

class LaboratorioExame extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};
LaboratorioExame.init({
  laboratorio_id: DataTypes.INTEGER,
  exame_id: DataTypes.INTEGER
}, {
  sequelize: db,
  modelName: 'LaboratorioExame',
  tableName: 'LaboratorioExames'
});

module.exports = LaboratorioExame;