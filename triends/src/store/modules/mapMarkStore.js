const mapMarkStore = {
  namespaced: true,
  state: {
    selectedMarker: null,
  },
  getters: {},
  mutations: {
    SET_FOCUS_MARKER: (state, { lat, lng }) => {
      state.selectedMarker = { lat, lng };
    },
  },
  actions: {
    changeFocusMarker({ commit }, { lat, lng }) {
      commit("SET_FOCUS_MARKER", { lat: lat, lng: lng });
    },
  },
};

export default mapMarkStore;
