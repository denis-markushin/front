export default {
  state: {
    pages: [
      {
        id: 1,
        code: 'plans',
        title: 'Учебные планы',
        icon: 'table'
      },
      {
        id: 2,
        code: 'entry-for-courses',
        title: 'Запись на курсы по выбору',
        icon: 'table'
      },
      {
        id: 3,
        code: 'forum',
        title: 'Форум',
        icon: 'table'
      },
      {
        id: 4,
        code: 'progress',
        title: 'Успеваемость',
        icon: 'table'
      },
      {
        id: 5,
        code: 'information',
        title: 'Информация о темах курсовых и дипломных работ',
        icon: 'table'
      },
      {
        id: 6,
        code: 'link',
        title: 'Ссылка',
        icon: 'table'
      },
      {
        id: 7,
        code: 'orders-list',
        title: 'Список приказов',
        icon: 'table'
      },
      {
        id: 8,
        code: 'my-portfolio',
        title: 'Моё портфолио',
        icon: 'table'
      },
      {
        id: 9,
        code: 'schedule',
        title: 'Расписание',
        icon: 'table'
      },
      {
        id: 10,
        code: 'payments',
        title: 'Стипендии и прочие выплаты',
        icon: 'table'
      },
      {
        id: 11,
        code: 'educational-materials',
        title: 'Учебно-методические материалы',
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
    getPageByCode: state => code => state.pages.find(page => page.code === code)
  }
}
