const { Op } = require("sequelize");
const Laboratorio = require("../models/Laboratorio");

class LaboratorioService {
  async create({
    nome,
    endereco,
    status,
  }) {
    const laboratorio = await Laboratorio.create({
      nome,
      endereco,
      status,
    });
    return laboratorio;
  }
  async findById(id) {
    return Laboratorio.findByPk(id);
  }
  async find({ filterByName } = { filterByName: undefined }) {
    const filters = {
      ...(filterByName && {
        nome: {
          [Op.like]: `%${escape(filterByName)}%`,
        },
      }),
    };
    return Laboratorio.findAll({
      where: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }
  async update(instance) {
    await instance.save();
  }
  async deleteById(id) {
    await Laboratorio.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = LaboratorioService;
