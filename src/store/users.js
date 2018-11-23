import axios from 'axios'

export default {
  state: {
    user: null
  },
  mutations: {
    login (state, user) {
      state.user = user
    },
    logout (state) {
      state.user = null
    }
  },
  actions: {
    login ({ commit }) {
      axios.get('/auth/users/current')
        .then(function (response) {
          console.log(response.data)
          commit('login', response.data)
        })
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  getters: {
    getCurrentUser (state) {
      return state.user
    }
  }
}
