import { Product, ProductCategory } from "@/interfaces/products";

export interface ProductCategoryState {
  categories: ProductCategory[];
}

export interface ProductState {
  products: Product[];
}
