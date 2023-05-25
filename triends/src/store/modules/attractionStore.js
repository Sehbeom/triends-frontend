import {
  getAttractionWithKeyword,
  getAttractionWithRecommand,
} from "@/apis/map";

const attractionStore = {
  namespaced: true,
  state: {
    selectedAttraction: null,
    isRecommanded: false,
    isSearchable: true,
  },
  getters: {},
  mutations: {
    SET_SEARCH_ATTRACTION: (state, attractionList) => {
      state.selectedAttraction = attractionList;
    },
    SET_SEARCH_TYPE_KEYWORD: (state) => {
      state.selectedAttraction = null;
      state.isRecommanded = false;
      state.isSearchable = true;
    },
    SET_SEARCH_TYPE_RECOMMAND: (state) => {
      state.selectedAttraction = null;
      state.isRecommanded = true;
      state.isSearchable = true;
    },
    SET_SEARCHABLE_FALSE: (state) => {
      state.isSearchable = false;
      state.selectedAttraction = null;
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
    setSearchable({ commit }) {
      commit("SET_SEARCHABLE_FALSE");
    },
  },
};

export default attractionStore;
