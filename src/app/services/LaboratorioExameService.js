const { Op } = require("sequelize");
const LaboratorioExame = require("../models/LaboratorioExame");

class LaboratorioExameService {
  async create({
    laboratorio_id,
    exame_id,
  }) {
    const laboratorioexame = await LaboratorioExame.create({
      laboratorio_id,
      exame_id,
    });
    return laboratorioexame;
  }
  async findById(id) {
    return LaboratorioExame.findByPk(id);
  }
  async find({ filterByName } = { filterByName: undefined }) {
    const filters = {
      ...(filterByName && {
        nome: {
          [Op.like]: `%${escape(filterByName)}%`,
        },
      }),
    };
    return LaboratorioExame.findAll({
      where: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }
  async update(instance) {
    await instance.save();
  }
  async deleteById(id) {
    await LaboratorioExame.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = LaboratorioExameService;
