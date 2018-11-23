import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import router from './router/index.js'
import store from './store/index.js'
import 'vuetify/dist/vuetify.min.css'
import App from './App1'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(Vuetify)

Vue.component()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
