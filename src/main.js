import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'babel-polyfill'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import LoginFormDialog from './components/LoginFormDialog'

Vue.use(VueAxios, axios)
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
    App
  },
  template: '<App/>',
  mounted () {
    axios
      .get('http://localhost:62714/hello')
      .then(response => console.log(response.data))
  }
})
