export default {
  state: {
    user: null
    // user: null
  },
  mutations: {
    testLogin (state) {
      state.user = {
        id: 1,
        name: 'Максим Абрамов'
      }
    },
    testLogout (state) {
      state.user = null
    }
  },
  actions: {
    testLogin ({ commit }) {
      commit('testLogin')
    },
    testLogout ({ commit }) {
      commit('testLogout')
    }
  },
  getters: {
    getCurrentUser (state) {
      return state.user
    }
  }
}
