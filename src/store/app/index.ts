import { AppState } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const defaultState: AppState = {
  isLoggedIn: null,
  token: "",
  logInError: false,
  userProfile: null,
  dashBoardMiniDrawer: false,
  dashBoardShowDrawer: true,
  notifications: []
};

export const appModule = {
  state: defaultState,
  mutations,
  actions,
  getters
};
