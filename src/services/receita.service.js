import http from "../http-common";

class ReceitaDataService {
  getAll() {
    return http.get("/receitas");
  }

  get(id) {
    return http.get(`/receitas/${id}`);
  }

  create(data) {
    return http.post("/receitas", data);
  }

  update(id, data) {
    return http.put(`/receitas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/receitas/${id}`);
  }

  deleteAll() {
    return http.delete(`/receitas`);
  }

  findByTitle(nome) {
    return http.get(`/receitas?nome=${nome}`);
  }
}

export default new ReceitaDataService();
