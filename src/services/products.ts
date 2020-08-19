import axios from "axios";
import { apiUrl } from "@/env";
import { ProductCategory, ProductCategoryCreate } from "@/interfaces/products";

function setHeaders() {
  return {
    header: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
}

export const productApi = {
  async getProductCategories() {
    return axios.get<ProductCategory[]>(`${apiUrl}/api/v1/`);
  },
  async CreateProductCategory(data: ProductCategoryCreate) {
    return axios.post(`${apiUrl}/api/v1/categories/`, data);
  }
  // async getProductCategoryById() {},
  // async getProductSubCategories() {},
  // async getProductSubCategoriesById() {}
};
