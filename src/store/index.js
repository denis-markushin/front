import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import loginFormDialog from './loginFormDialog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    users,
    loginFormDialog
  }
})
