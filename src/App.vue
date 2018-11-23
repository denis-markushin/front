<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="currentUser"
      v-model="drawer"
      fixed
      app
      v-bind:style="{ display: 'inline-flex' }"
    >
      <v-list dense class="pt-0">

        <v-list-tile
          v-for="page in pages"
          :key="page.id"
          @click="$router.push(page.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ page.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="adminPage in adminPages"
            :key="adminPage.id"
            @click="$router.push(adminPage.path)"
          >
            <v-list-tile-title>{{ adminPage.title }}</v-list-tile-title>
            <v-list-tile-action></v-list-tile-action>
          </v-list-tile>
        </v-list-group>

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
    <router-view/>
    <div
      v-if="overlay"
      class="overlay"
    ></div>
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
    },
    adminPages () {
      return this.$store.getters.getAllAdminPages
    },
    overlay () {
      return this.$store.getters.getOverlayState
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
  .overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, .3);
  }
  .pointer{
    cursor: pointer;
  }
</style>
