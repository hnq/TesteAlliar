const { Op } = require("sequelize");
const Exame = require("../models/Exame");

class ExameService {
  async create({
    nome,
    tipo,
    status,
  }) {
    const exame = await Exame.create({
      nome,
      tipo,
      status,
    });
    return exame;
  }
  async findById(id) {
    return Exame.findByPk(id);
  }
  async find({ filterByName } = { filterByName: undefined }) {
    const filters = {
      ...(filterByName && {
        nome: {
          [Op.like]: `%${escape(filterByName)}%`,
        },
      }),
    };
    return Exame.findAll({
      where: Object.keys(filters).length > 0 ? filters : undefined,
    });
  }
  async update(instance) {
    await instance.save();
  }
  async deleteById(id) {
    await Exame.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = ExameService;
