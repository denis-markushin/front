import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Plans from '../components/Plans'
import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans,
      // route guard
      beforeEnter (to, from, next) {
        if (store.getters.getCurrentUser) {
          next()
        } else {
          console.log('Необходимо залогиниться!')
        }
      }
    }
  ]
})
