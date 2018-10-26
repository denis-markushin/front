import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'babel-polyfill'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.scss'
import App from './App'
import Main from './components/Main'
import LoginFormDialog from './components/LoginFormDialog'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.component('login-form-dialog', LoginFormDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    Main
  },
  template: '<App/>'
})
