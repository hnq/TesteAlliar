import request from "supertest";
import LaboratorioService from "../../services/LaboratorioService";
import app from "@system/Application";
const laboratorios = [
  {
    nome: "Laboratorio",
    endereco: "Test of endereco",
    status: 0,
  },
];

const url = "/v1/laboratorios";
jest.mock("../../services/LaboratorioService", () => jest.fn());
LaboratorioService.mockImplementation(() => ({
  find: jest.fn().mockReturnValue(
    laboratorios.map((laboratorio) => {
      laboratorio.get = jest.fn().mockReturnValue(laboratorio);
      return laboratorio;
    })
  ),
  create: jest.fn((arg) => ({
    get: () => arg,
  })),
}));

describe("V1::LaboratorioServiceController", () => {
  describe("GET /v1/laboratorios", () => {
    test("return the list result", async () => {
      const response = await request(app.callback()).get(url);
      expect(response.status).toBe(200);
      expect(response.type).toEqual("application/json");
      expect(response.body.result.length).toBe(1);
    });
  });
  describe("POST /v1/laboratorios", () => {
    test("return the created laboratorios", async () => {
      const response = await request(app.callback()).post(url).send({
        nome: 1,
        tipo: "Test of tipo",
        status: 0,
      });
      expect(response.status).toBe(200);
      expect(response.type).toEqual("application/json");
      expect(response.body.result).toMatchObject({
        status: 1,
      });
    });
  });
});
