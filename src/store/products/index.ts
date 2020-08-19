import { ProductCategoryState } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const defaultState: ProductCategoryState = {
  categories: []
};

export const categoryModule = {
  state: defaultState,
  mutations,
  getters,
  actions
};
