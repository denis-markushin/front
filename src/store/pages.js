export default {
  state: {
    pages: [
      {
        id: 1,
        path: '/timetables',
        title: 'Рассписание',
        text: 'Контент'
      },
      {
        id: 2,
        path: '/portfolio',
        title: 'Портфолио',
        text: 'Контент'
      },
      {
        id: 3,
        path: '/messages',
        title: 'Сообщения',
        text: 'Контент'
      },
      {
        id: 4,
        path: '/settings',
        title: 'Настройки',
        text: 'Контент'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getAllPages (state) {
      return state.pages
    },
    getPageByPath: state => path => state.pages.find(page => page.path === path)
  }
}
