<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="currentUser"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="sayItemTitle(item)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-side-icon
        v-if="currentUser"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Личный кабинет</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar
        v-if="currentUser"
        size="36px"
        class="mr-2"
      >
        <img
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          alt="Avatar"
        >
      </v-avatar>
      {{ currentUser ? currentUser.name : ''}}

      <v-icon
        class="pointer ml-4"
        left
        v-if="currentUser"
        @click="logout"
      >exit_to_app</v-icon>

      <v-icon
        v-if="!currentUser"
        left
        class="pointer"
        @click="toggleLoginForm"
      >person</v-icon>

    </v-toolbar>
    <!-- Content -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          Content
        </v-layout>
      </v-container>
    </v-content>
    <login-form-dialog></login-form-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      title: 'Title',
      drawer: true,
      items: [
        {
          title: 'Учебные планы',
          icon: 'table'
        },
        {
          title: 'Запись на курсы по выбору',
          icon: 'table'
        },
        {
          title: 'Форум',
          icon: 'table'
        },
        {
          title: 'Успеваемость',
          icon: 'table'
        },
        {
          title: 'Информация о темах курсовых и дипломных работ',
          icon: 'table'
        },
        {
          title: 'Ссылка',
          icon: 'table'
        },
        {
          title: 'Список приказов',
          icon: 'table'
        },
        {
          title: 'Моё портфолио',
          icon: 'table'
        },
        {
          title: 'Расписание',
          icon: 'table'
        },
        {
          title: 'Стипендии и прочие выплаты',
          icon: 'table'
        },
        {
          title: 'Учебно-методические материалы',
          icon: 'table'
        }
      ]
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },
  methods: {
    sayItemTitle (item) {
      alert(item.title)
    },
    toggleLoginForm () {
      this.$store.dispatch('toggleLoginFormDialog')
    },
    logout () {
      this.$store.dispatch('testLogout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
