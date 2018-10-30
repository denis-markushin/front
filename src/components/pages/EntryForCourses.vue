<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-left align-left>
        <div class="text-xs-left">
          <h1 class="headline">{{ page.title }}</h1>
          <span class="subheading">{{ page.text }}</span>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'EntryForCourses',
  computed: {
    page () {
      return this.$store.getters.getPageByPath(this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>
