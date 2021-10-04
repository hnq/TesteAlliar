const LaboratorioService = require("./LaboratorioService");

let laboratorioService = new LaboratorioService();
let laboratorio;
describe("LaboratorioService", () => {
  beforeEach(async () => {
    laboratorioService = new LaboratorioService();
    laboratorio = await laboratorioService.create({
      nome: "Test Name",
      endereco: "Test of tipo",
      status: 0,
    });
  });
  it("should create a new laboratorio", async () => { });
  it("should find laboratorio by id", async () => {
    const found = await laboratorioService.findById(laboratorio.id);
    expect(found).toBeDefined();
    expect(found).toMatchObject({
      nome: "Test Name",
      endereco: "Test of tipo",
      status: 0,
    });
  });
  it("should return all laboratorios", async () => {
    await laboratorioService.create({
      nome: "Test Name",
      endereco: "Test of tipo",
      status: 0,
    });
    const laboratorio = await laboratorioService.find();
    expect(laboratorio.length).toBe(2);
  });
  it("should return all laboratorios filter by title", async () => {
    await laboratorioService.create({
      nome: "Test Name",
      endereco: "Test of tipo",
      status: 0,
    });
    const laboratorio = await laboratorioService.find({
      filterByTitle: "Another",
    });
    expect(laboratorio.length).toBe(1);
  });
  it("should delete laboratorio by id", async () => {
    await laboratorioService.deleteById(laboratorio.id);
    const laboratorios = await laboratorioService.find();
    expect(laboratorios.length).toBe(0);
  });
  it("should update laboratorio", async () => {
    laboratorio.nome = "Test Update";
    await laboratorioService.update(laboratorio);
    const found = await laboratorioService.findById(laboratorio.id);
    expect(found).toMatchObject({
      laboratorio.nome: "Test Update",
    });
  });
});
