<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="loginFormDialog"
      width="500"
    >
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
            <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="testLogin"
          >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'LoginFormDialog',
  computed: {
    loginFormDialog () {
      return this.$store.getters.getLoginFormDialog
    }
  },
  methods: {
    testLogin () {
      this.$store.dispatch('toggleLoginFormDialog')
      this.$store.dispatch('testLogin')
    }
  }
}
</script>

<style scoped>
</style>
