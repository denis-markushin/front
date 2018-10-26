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
          v-for="item in pages"
          :key="item.id"
          @click="$router.push(item.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
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
      <v-toolbar-title
        class="pointer"
        @click="$router.push('/')"
      >Личный кабинет</v-toolbar-title>
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
    <router-view></router-view>
    <login-form-dialog></login-form-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Title',
      drawer: true,
      items: [

      ]
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    },
    pages () {
      return this.$store.getters.getAllPages
    }
  },
  methods: {
    toggleLoginForm () {
      this.$store.dispatch('toggleLoginFormDialog')
    },
    logout () {
      this.$store.dispatch('testLogout')
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>
