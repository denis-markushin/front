import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Plans from '../components/pages/Plans'
import Forum from '../components/pages/Forum'
import OrderList from '../components/pages/OrderList'
import Schedule from '../components/pages/Schedule'
import Payments from '../components/pages/Payments'
import Progress from '../components/pages/Progress'
import EntryForCourses from '../components/pages/EntryForCourses'
import Link from '../components/pages/Link'
import EducationMaterials from '../components/pages/EducationMaterials'
import UniversityConfiguration from '../components/pages/UniversityConfiguration'
import store from '../store'

Vue.use(VueRouter)

export default new VueRouter({
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
    },
    {
      path: '/entry-for-courses',
      name: 'EntryForCourses',
      component: EntryForCourses
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/information',
      name: 'Information',
      component: Progress
    },
    {
      path: '/link',
      name: 'Link',
      component: Link
    },
    {
      path: '/orders-list',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/my-portfolio',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/payments',
      name: 'Payments',
      component: Payments
    },
    {
      path: '/educational-materials',
      name: 'EducationMaterials',
      component: EducationMaterials
    },
    {
      path: '/university-configuration',
      name: 'UniversityConfiguration',
      component: UniversityConfiguration
    }]
})
