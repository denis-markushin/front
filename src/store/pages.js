export default {
  state: {
    pages: [
      {
        id: 1,
        path: '/plans',
        title: 'Учебные планы',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 2,
        path: '/entry-for-courses',
        title: 'Запись на курсы по выбору',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 3,
        path: '/forum',
        title: 'Форум',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 4,
        path: '/progress',
        title: 'Успеваемость',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 5,
        path: '/information',
        title: 'Информация о темах курсовых и дипломных работ',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 6,
        path: '/link',
        title: 'Ссылка',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 7,
        path: '/orders-list',
        title: 'Список приказов',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 8,
        path: '/my-portfolio',
        title: 'Моё портфолио',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 9,
        path: '/schedule',
        title: 'Расписание',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 10,
        path: '/payments',
        title: 'Стипендии и прочие выплаты',
        text: 'Контент',
        icon: 'table'
      },
      {
        id: 11,
        path: '/educational-materials',
        title: 'Учебно-методические материалы',
        text: 'Контент',
        icon: 'table'
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
