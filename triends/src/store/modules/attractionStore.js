import { getAttractionWithKeyword } from "@/apis/map";

const attractionStore = {
  namespaced: true,
  state: {
    selectedAttraction: null,
  },
  getters: {},
  mutations: {
    SET_ATTRACTION: (state, attractionList) => {
      state.selectedAttraction = attractionList;
    },
  },
  actions: {
    getAttractionByKeyword({ commit }, url) {
      getAttractionWithKeyword(url, (data) => {
        commit("SET_ATTRACTION", data.data.data);
      }),
        (error) => {
          console.log("something get wrong", error);
        };
    },
  },
};

export default attractionStore;
