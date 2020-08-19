import { ProductCategoryState } from "./state";
import { ProductCategory } from "@/interfaces/products";
import { State } from "../state";
import { getStoreAccessors } from "typesafe-vuex";
export const mutations = {
  setCategories(state: ProductCategoryState, payload: ProductCategory[]) {
    state.categories = payload;
  },
  setCategory(state: ProductCategoryState, payload: ProductCategory) {
    const category = state.categories.filter(
      (category: ProductCategory) => category.id !== payload.id
    );
    category.push(payload);
    state.categories = category;
  }
};

const { commit } = getStoreAccessors<ProductCategoryState, State>("");

export const commitSetCategory = commit(mutations.setCategory);
export const commitSetCategories = commit(mutations.setCategories);
