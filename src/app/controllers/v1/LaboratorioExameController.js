import { route, Method, BaseController } from "@system/controllers";
import StandardSerializer from "../../serializers/StandardSerializer";
import LaboratorioExameService from "../../services/LaboratorioExameService";

export default class V1LaboratorioExameController extends BaseController {
  laboratorioexameService = new LaboratorioExameService();

  @route("/", Method.GET)
  async list() {
    const query = this.ctx.request.query;
    const { nome } = query;
    const laboratorioexames = await this.laboratorioexameService.find({
      filterByName: nome,
    });

    this.renderWith(
      {
        standard: "list",
        result: laboratorioexames,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }

  @route("/", Method.POST)
  async create() {
    const body = this.ctx.request.body;
    const laboratorioexame = await this.laboratorioexameService.create(body);
    this.renderWith(
      {
        standard: "create",
        result: laboratorioexame,
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
    const laboratorioexame = await this.laboratorioexameService.findById(id);
    if (!laboratorioexame) throw new BadRequest(`LaboratorioExame with id ${id} not found`);
    Object.assign(laboratorioexame, body);
    await this.laboratorioexameService.update(laboratorioexame);
    this.renderWith(
      {
        standard: "update",
        result: laboratorioexame,
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
    const laboratorioexame = await this.laboratorioexameService.findById(id);
    if (!laboratorioexame) throw new BadRequest(`LaboratorioExame with id ${id} not found`);
    Object.assign(laboratorioexame, body);
    await this.laboratorioexameService.deleteById(id);
    this.renderWith(
      {
        standard: "delete",
        result: laboratorioexame,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }
}
