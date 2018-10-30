export default {
  state: {
    overlay: false
  },
  mutations: {
    toggleOverlay (state) {
      state.overlay = !state.overlay
    }
  },
  actions: {
    toggleOverlay ({ commit }) {
      commit('toggleOverlay')
    }
  },
  getters: {
    getOverlayState (state) {
      return state.overlay
    }
  }
}
