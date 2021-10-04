import { route, Method, BaseController } from "@system/controllers";
import StandardSerializer from "../../serializers/StandardSerializer";
import LaboratorioService from "../../services/LaboratorioService";

export default class V1LaboratorioController extends BaseController {
  laboratorioService = new LaboratorioService();

  @route("/", Method.GET)
  async list() {
    const query = this.ctx.request.query;
    const { nome } = query;
    const laboratorios = await this.laboratorioService.find({
      filterByName: nome,
    });

    this.renderWith(
      {
        standard: "list",
        result: laboratorios,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }

  @route("/", Method.POST)
  async create() {
    const body = this.ctx.request.body;
    const laboratorio = await this.laboratorioService.create(body);
    this.renderWith(
      {
        standard: "create",
        result: laboratorio,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }

  @route("/:id", Method.PUT)
  async update() {
    const { id } = this.ctx.request.params;
    const body = this.ctx.request.body;
    const laboratorio = await this.laboratorioService.findById(id);
    if (!laboratorio) throw new BadRequest(`Laboratorio with id ${id} not found`);
    Object.assign(laboratorio, body);
    await this.laboratorioService.update(laboratorio);
    this.renderWith(
      {
        standard: "update",
        result: laboratorio,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }


  @route("/:id", Method.DELETE)
  async deleteById() {
    const { id } = this.ctx.request.params;
    const body = this.ctx.request.body;
    const laboratorio = await this.laboratorioService.findById(id);
    if (!laboratorio) throw new BadRequest(`Laboratorio with id ${id} not found`);
    Object.assign(laboratorio, body);
    await this.laboratorioService.deleteById(id);
    this.renderWith(
      {
        standard: "delete",
        result: laboratorio,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }
}
