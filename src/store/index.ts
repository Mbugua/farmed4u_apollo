import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { State } from "./state";
import { appModule } from "./app";
import { categoryModule } from "./products";
Vue.use(Vuex);

const storeOptions: StoreOptions<State> = {
  modules: {
    app: appModule,
    category: categoryModule
  }
};

export const store = new Vuex.Store<State>(storeOptions);
export default store;
