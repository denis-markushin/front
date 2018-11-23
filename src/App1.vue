<template>
  <v-app>
      <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" max-height="180"></v-img>
    <v-toolbar
      color="cyan"
      dark
      tabs
      app
      height="0"
    >

      <v-spacer></v-spacer>

      <v-tabs
        slot="extension"
        color="transparent"
        fixed-tabs
        slider-color="yellow"
      >
        <v-tab
          v-for="page in pages"
          :key="page.id"
          @click="$router.push(page.path)"
        >
          {{ page.title }}
        </v-tab>
      </v-tabs>

    </v-toolbar>

    <v-content style="padding-top: 10px;">
      <v-container grid-list-md text-xs-center >
        <router-view></router-view>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  computed: {
    pages () {
      return this.$store.getters.getAllPages
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
