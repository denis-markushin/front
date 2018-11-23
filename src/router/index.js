import VueRouter from 'vue-router'
import Timetable from '../components/pages/Timetable'
import Messages from '../components/pages/Messages'
import Settings from '../components/pages/Settings'
import Portfolio from '../components/pages/Portfolio'
// import store from '../store'

export default new VueRouter({
  routes: [
    {
      path: '/settings/',
      name: 'settings',
      component: Settings
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/timetables',
      name: 'timetables',
      component: Timetable
    }
  ]
})
