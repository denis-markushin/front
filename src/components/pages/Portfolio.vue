<template>
  <v-layout align-center justify-center>
    <v-flex xs12>
      <h2>{{ student.surname + '. ' + student.name + '. ' + student.patronymic }}</h2>
    </v-flex>



  </v-layout>
</template>

<script>
export default {
  name: 'Portfolio',

  data: function () {
    return {
      student: {
        name: 'П',
        surname: 'А',
        patronymic: 'Юлия',
        id: '67121f9a-4068-11e7-8289-d8cb8ac9863e',
        foreignLanguagesCount: 2,
        foreignLanguages: ['Испанский', 'Китайский'],
        groups: [{
          groupId: '3e822983-4068-11e7-8289-d8cb8ac9863e',
          groupName: '1',
          subGroup: {
            subGroupId: '3e82298e-4068-11e7-8289-d8cb8ac9863e',
            subGroupName: '2'}
        }]
      }
    }
  },

  computed: {
    page () {
      return this.$store.getters.getPageByPath(this.$route.path)
    }
  }

}
</script>

<style scoped>

</style>
