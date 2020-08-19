import { AppState, AppNotification } from "./state";
import { getStoreAccessors } from "typesafe-vuex";
import { State } from "../state";

export const mutations = {
  addNotification(state: AppState, payload: AppNotification) {
    state.notifications.push(payload);
  },
  removeNotification(state: AppState, payload: AppNotification) {
    state.notifications = state.notifications.filter(
      notification => notification !== payload
    );
  }
};

const { commit } = getStoreAccessors<AppState | any, State>("");

export const commitAddNotification = commit(mutations.addNotification);
export const commitRemoveNotification = commit(mutations.removeNotification);
