const ExameService = require("./ExameService");

let exameService = new ExameService();
let exame;
describe("ExameService", () => {
  beforeEach(async () => {
    exameService = new ExameService();
    exame = await exameService.create({
      nome: "Test Name",
      tipo: "Test of tipo",
      status: 0,
    });
  });
  it("should create a new exame", async () => { });
  it("should find exame by id", async () => {
    const found = await exameService.findById(exame.id);
    expect(found).toBeDefined();
    expect(found).toMatchObject({
      nome: "Test Name",
      tipo: "Test of tipo",
      status: 0,
    });
  });
  it("should return all exames", async () => {
    await exameService.create({
      nome: "Test Name",
      tipo: "Test of tipo",
      status: 0,
    });
    const exame = await exameService.find();
    expect(exame.length).toBe(2);
  });
  it("should return all exames filter by title", async () => {
    await exameService.create({
      nome: "Test Name",
      tipo: "Test of tipo",
      status: 0,
    });
    const exame = await exameService.find({
      filterByTitle: "Another",
    });
    expect(exame.length).toBe(1);
  });
  it("should delete exame by id", async () => {
    await exameService.deleteById(exame.id);
    const exames = await exameService.find();
    expect(exames.length).toBe(0);
  });
  it("should update exame", async () => {
    exame.nome = "Test Update";
    await exameService.update(exame);
    const found = await exameService.findById(exame.id);
    expect(found).toMatchObject({
      exame.nome: "Test Update",
    });
  });
});
