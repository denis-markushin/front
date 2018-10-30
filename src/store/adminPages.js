export default {
  state: {
    pages: [
      {
        id: 1,
        path: '/university-configuration',
        title: 'Конфигурация университетов',
        text: 'Конфигурация университетов',
        icon: 'setting'
      },
      {
        id: 2,
        path: '/university-adjustment',
        title: 'Изменить настройки окружения университета',
        text: 'Настроки окружения университета',
        icon: 'setting'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getAllAdminPages (state) {
      return state.pages
    },
    getAdminPageByPath: state => path => state.pages.find(page => page.path === path)
  }
}
