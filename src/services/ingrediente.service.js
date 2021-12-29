import http from "../http-common";

class IngredienteDataService {
  getAll() {
    return http.get("/ingredientes");
  }

  get(id) {
    return http.get(`/ingredientes/${id}`);
  }

  create(data) {
    return http.post("/ingredientes", data);
  }

  update(id, data) {
    return http.put(`/ingredientes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/ingredientes/${id}`);
  }

  deleteAll() {
    return http.delete(`/ingredientes`);
  }

  findByTitle(nome) {
    return http.get(`/ingredientes?nome=${nome}`);
  }
}

export default new IngredienteDataService();
