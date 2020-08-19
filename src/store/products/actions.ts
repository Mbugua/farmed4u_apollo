import { ActionContext } from "vuex";
import { dispatchCheckApiError } from "../app/actions";
import { State } from "../state";
import { productApi } from "@/services/products";
import { commitSetCategories, commitSetCategory } from "./mutations";
import { getStoreAccessors } from "typesafe-vuex";
import { ProductCategoryState } from "./state";
import { ProductCategoryCreate } from "@/interfaces/products";
import {
  commitAddNotification,
  commitRemoveNotification
} from "../app/mutations";

type MainContext = ActionContext<ProductCategoryState, State>;

export const actions = {
  async actionGetProductCategoeries(context: MainContext) {
    try {
      const response = await productApi.getProductCategories();
      if (response) {
        commitSetCategories(context, response.data);
      }
    } catch (error) {
      await dispatchCheckApiError(context, error);
    }
  },
  async actionCreateProductCategory(
    context: MainContext,
    payload: ProductCategoryCreate
  ) {
    try {
      const loadingNotification = { content: "saving", showProgress: true };
      commitAddNotification(context, loadingNotification);
      const response = (
        await Promise.all([
          productApi.CreateProductCategory(payload),
          await new Promise((resolve, reject) =>
            setTimeout(() => resolve(), 500)
          )
        ])
      )[0];
      commitSetCategory(context, response.data);
      commitRemoveNotification(context, loadingNotification);
      commitAddNotification(context, {
        content: "Product Category created",
        color: "success"
      });
    } catch (error) {
      await dispatchCheckApiError(context, error);
    }
  }
};

const { dispatch } = getStoreAccessors<ProductCategoryState, State>("");

export const dipatchGetProductCategories = dispatch(
  actions.actionGetProductCategoeries
);
export const dispatchCreateProductCategory = dispatch(
  actions.actionCreateProductCategory
);
