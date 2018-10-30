import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import pages from './pages'
import loginFormDialog from './loginFormDialog'
import overlay from './overlay'
import adminPages from './adminPages'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    users,
    pages,
    adminPages,
    loginFormDialog,
    overlay
  }
})
