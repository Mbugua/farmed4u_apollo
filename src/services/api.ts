import http from "@/plugins/http-common";
// import http from "@/plugins/axios";
class ProductService {
  getAll() {
    return http.get("/super");
  }
}

export default new ProductService();
