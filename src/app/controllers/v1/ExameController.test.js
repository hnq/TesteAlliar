import request from "supertest";
import ExameService from "../../services/ExameService";
import app from "@system/Application";
const exames = [
  {
    nome: "Test Name",
    tipo: "Test of tipo",
    status: 0,
  },
];

const url = "/v1/exames";
jest.mock("../../services/ExameService", () => jest.fn());
ExameService.mockImplementation(() => ({
  find: jest.fn().mockReturnValue(
    exames.map((exame) => {
      exame.get = jest.fn().mockReturnValue(exame);
      return exame;
    })
  ),
  create: jest.fn((arg) => ({
    get: () => arg,
  })),
}));

describe("V1::ExameServiceController", () => {
  describe("GET /v1/exames", () => {
    test("return the list result", async () => {
      const response = await request(app.callback()).get(url);
      expect(response.status).toBe(200);
      expect(response.type).toEqual("application/json");
      expect(response.body.result.length).toBe(1);
    });
  });
  describe("POST /v1/exames", () => {
    test("return the created exames", async () => {
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
