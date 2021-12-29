import http from "../http-common";

class DoceDataService {
  getAll() {
    return http.get("/doces");
  }

  get(id) {
    return http.get(`/doces/${id}`);
  }

  create(data) {
    return http.post("/doces", data);
  }

  update(id, data) {
    return http.put(`/doces/${id}`, data);
  }

  delete(id) {
    return http.delete(`/doces/${id}`);
  }

  deleteAll() {
    return http.delete(`/doces`);
  }

  findByTitle(nome) {
    return http.get(`/doces?nome=${nome}`);
  }
}

export default new DoceDataService();
