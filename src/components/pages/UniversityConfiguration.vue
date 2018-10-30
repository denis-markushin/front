<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-left align-left>
        <div class="text-xs-left">
          <h1 class="headline">{{ page.title }}</h1>
          <span class="subheading">{{ page.text }}</span>

          <v-flex xs12 sm8 md6>
            <v-text-field
              label="SFTP Link to DB"
              placeholder="Enter SFTP Link to DB"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm8 md6>
            <v-text-field
              label="Link to AD"
              placeholder="Enter Link to AD"
            ></v-text-field>
          </v-flex>

        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'UniversityConfiguration',
  computed: {
    page () {
      return this.$store.getters.getAdminPageByPath(this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>
