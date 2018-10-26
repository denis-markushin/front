<template>
  <v-app>
    <v-app id="inspire">
      <v-navigation-drawer
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
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Личный кабинет</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          flat
          v-if="currentUser"
        >
          {{ currentUser.name }}
          <v-icon>person</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- Content -->
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            Content
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
