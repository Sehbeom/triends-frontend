import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import userStore from "@/store/modules/userStore";
import attractionStore from "@/store/modules/attractionStore";
import planDraftStore from "@/store/modules/planDraftStore";
import mapMarkStore from "@/store/modules/mapMarkStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userStore,
    attractionStore,
    planDraftStore,
    mapMarkStore,
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage,
    }),
  ],
});
