import request from "supertest";
import {app} from "../app.js";

describe("Butterflies test CRUD", () => {
  let butterflyId;
  let response;

  const butterflyMock = {
    name: "Mariposa Monarca",
    order_name: "Lepidoptera",
    family: "Nymphalidae",
    color: "Naranja y negro",
    size: "10 cm",
    origin: "América del Norte",
    location: "México",
    habitat: "Praderas",
    plants: "Algodoncillo",
    cycle: "Completo",
    img: "https://ejemplo.com/monarca.jpg",
    fenology: "Migración anual"
  };

  // POST /butterflies
  describe("POST /butterflies", () => {
    beforeEach(async () => {
      response = await request(app)
        .post("/butterflies")
        .send(butterflyMock)
        .set("Accept", "application/json");

      butterflyId = response.body.data?.id;
    });

    test("should return status 201", () => {
      expect(response.status).toBe(201);
    });

    test("should return created butterfly with id", () => {
      expect(response.body.data).toHaveProperty("id");
      expect(response.body.data.name).toBe("Mariposa Monarca");
    });
  });

  // GET /butterflies
  describe("GET /butterflies", () => {
    let getAllResponse;

    beforeEach(async () => {
      getAllResponse = await request(app)
        .get("/butterflies")
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(getAllResponse.status).toBe(200);
    });

    test("should return an array of butterflies", () => {
      expect(Array.isArray(getAllResponse.body)).toBe(true);
      expect(getAllResponse.body.length).toBeGreaterThan(0);
    });
  });

  // GET /butterflies/:id
  describe("GET /butterflies/:id", () => {
    let getByIdResponse;

    beforeEach(async () => {
      getByIdResponse = await request(app)
        .get(`/butterflies/${butterflyId}`)
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(getByIdResponse.status).toBe(200);
    });

    test("should return the butterfly with the given id", () => {
      expect(getByIdResponse.body).toHaveProperty("id", butterflyId);
      expect(getByIdResponse.body.name).toBe("Mariposa Monarca");
    });
  });

  // PUT /butterflies/:id
  describe("PUT /butterflies/:id", () => {
    let updateResponse;
    const updatedData = {
      name: "Mariposa Reina",
      color: "Naranja, negro y blanco"
    };

    beforeEach(async () => {
      updateResponse = await request(app)
        .put(`/butterflies/${butterflyId}`)
        .send(updatedData)
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(updateResponse.status).toBe(200);
    });

    test("should update the butterfly correctly", () => {
      expect(updateResponse.body.data).toHaveProperty("id", butterflyId);
      expect(updateResponse.body.data.name).toBe("Mariposa Reina");
      expect(updateResponse.body.data.color).toBe("Naranja, negro y blanco");
    });
  });

  // DELETE /butterflies/:id
  describe("DELETE /butterflies/:id", () => {
    let deleteResponse;

    beforeEach(async () => {
      deleteResponse = await request(app)
        .delete(`/butterflies/${butterflyId}`)
        .set("Accept", "application/json");
    });

    test("should return status 200", () => {
      expect(deleteResponse.status).toBe(200);
    });

    test("should return success message", () => {
      expect(deleteResponse.body.ok).toBe(true);
      expect(deleteResponse.body.msg).toBe("Mariposa eliminada correctamente");
    });

    test("should not find butterfly after delete", async () => {
      const checkResponse = await request(app)
        .get(`/butterflies/${butterflyId}`)
        .set("Accept", "application/json");

      expect(checkResponse.status).toBe(404);
    });
  });
});
