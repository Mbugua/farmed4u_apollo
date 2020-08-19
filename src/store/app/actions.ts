// import router from "@/router";

import { AppNotification, AppState } from "./state";
import { ActionContext } from "vuex";
import { State } from "../state";
import { AxiosError } from "axios";
import { getStoreAccessors } from "typesafe-vuex";
import { commitRemoveNotification } from "./mutations";

type MainContext = ActionContext<AppState, State>;

export const actions = {
  async actionCheckApiError(context: MainContext, payload: AxiosError) {
    if (payload.response!.status === 401) {
      // await dispatchLogOut(context);
      console.log(context);
    }
  },
  async removeNotification(
    context: MainContext,
    payload: { notification: AppNotification; timeout: number }
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commitRemoveNotification(context, payload.notification);
        resolve(true);
      }, payload.timeout);
    });
  }
};
const { dispatch } = getStoreAccessors<AppState | any, State>("");

export const dispatchCheckApiError = dispatch(actions.actionCheckApiError);
