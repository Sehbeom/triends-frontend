import { getAttractionWithKeyword, getAttractionWithRecommand } from "@/apis/map";

const attractionStore = {
  namespaced: true,
  state: {
    selectedAttraction: null,
    isRecommanded: false,
  },
  getters: {},
  mutations: {
    SET_SEARCH_ATTRACTION: (state, attractionList) => {
      state.selectedAttraction = attractionList;
    },
    SET_SEARCH_TYPE_KEYWORD: (state) => {
      state.selectedAttraction = null;
      state.isRecommanded = false;
    },
    SET_SEARCH_TYPE_RECOMMAND: (state) => {
      state.selectedAttraction = null;
      state.isRecommanded = true;
    },
  },
  actions: {
    getAttraction({ commit, state }, url) {
      if (!state.isRecommanded) {
        getAttractionWithKeyword(url, (data) => {
          commit("SET_SEARCH_ATTRACTION", data.data.data);
        }),
          (error) => {
            console.log("something get wrong", error);
          };
      } else {
        getAttractionWithRecommand(url, (data) => {
          commit("SET_SEARCH_ATTRACTION", data.data.data);
        }),
          (error) => {
            console.log("something get wrong", error);
          };
      }
    },
    setSearchTypeKeyword({ commit }) {
      commit("SET_SEARCH_TYPE_KEYWORD");
    },
    setSearchTypeRecommand({ commit }) {
      commit("SET_SEARCH_TYPE_RECOMMAND");
    },
  },
};

export default attractionStore;
