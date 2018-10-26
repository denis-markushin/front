export default {
  state: {
    loginFormDialog: false
  },
  mutations: {
    toggleLoginFormDialog (state) {
      state.loginFormDialog = !state.loginFormDialog
    }
  },
  actions: {
    toggleLoginFormDialog ({ commit }) {
      commit('toggleLoginFormDialog')
    }
  },
  getters: {
    getLoginFormDialog (state) {
      return state.loginFormDialog
    }
  }
}
