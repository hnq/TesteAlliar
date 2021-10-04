import { route, Method, BaseController } from "@system/controllers";
import StandardSerializer from "../../serializers/StandardSerializer";
import ExameService from "../../services/ExameService";

export default class V1ExameController extends BaseController {
  exameService = new ExameService();

  @route("/", Method.GET)
  async list() {
    const query = this.ctx.request.query;
    const { nome } = query;
    const exames = await this.exameService.find({
      filterByName: nome,
    });

    this.renderWith(
      {
        standard: "list",
        result: exames,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }

  @route("/", Method.POST)
  async create() {
    const body = this.ctx.request.body;
    const exame = await this.exameService.create(body);
    this.renderWith(
      {
        standard: "create",
        result: exame,
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
    const exame = await this.exameService.findById(id);
    if (!exame) throw new BadRequest(`Exame with id ${id} not found`);
    Object.assign(exame, body);
    await this.exameService.update(exame);
    this.renderWith(
      {
        standard: "update",
        result: exame,
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
    const exame = await this.exameService.findById(id);
    if (!exame) throw new BadRequest(`Exame with id ${id} not found`);
    Object.assign(exame, body);
    await this.exameService.deleteById(id);
    this.renderWith(
      {
        standard: "delete",
        result: exame,
      },
      {
        serializer: StandardSerializer,
      }
    );
  }
}
