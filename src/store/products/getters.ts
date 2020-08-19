import { ProductCategoryState } from "./state";
import { getStoreAccessors } from "typesafe-vuex";
import { State } from "../state";

export const getters = {
  categories: (state: ProductCategoryState) => state.categories,
  singleProductCategory: (state: ProductCategoryState) => (
    categoryId: string
  ) => {
    const filteredCategories = state.categories.filter(
      category => category.id === categoryId
    );
    if (filteredCategories.length > 0) {
      return { ...filteredCategories[0] };
    }
  }
};

const { read } = getStoreAccessors<ProductCategoryState, State>("");

export const readCategories = read(getters.categories);
export const readSingleProductCategory = read(getters.singleProductCategory);
