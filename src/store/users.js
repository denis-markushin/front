export default {
  state: {
    // user: {
    //   id: 1,
    //   name: 'Максим Абрамов'
    // }
    user: null
  },
  mutations: {},
  actions: {},
  getters: {
    getCurrentUser (state) {
      return state.user
    }
  }
}
