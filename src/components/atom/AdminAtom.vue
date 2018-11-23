<template>
  <v-layout row wrap align-center>

    <v-flex xs6>
      <v-select
        label="Select an university to adjust"
        :items="universities"
        item-text="name"
        return-object
        @change="fillFields"
      ></v-select>
    </v-flex>

    <v-flex xs6>
      <v-text-field
        label="University Name"
        placeholder="Enter an university name"
        v-model="university.name"
        autocomplete
      ></v-text-field>
    </v-flex>

    <v-flex xs6>
      <v-text-field
        label="SFTP Link to DB"
        placeholder="Enter a SFTP Link to DB"
        v-model="university.sftpLink"
      ></v-text-field>
    </v-flex>

    <v-flex xs6>
      <v-text-field
        label="Link to AD"
        placeholder="Enter a link to AD"
        v-model="university.adLink"
      ></v-text-field>
    </v-flex>

    <v-btn @click="saveUniversity" small color="primary">Save</v-btn>

  </v-layout>
</template>

<script>
export default {
  name: 'Admin',

  data: function () {
    return {
      university: {
        name: '',
        sftpLink: '',
        adLink: ''
      },
      universities: [
        {
          name: 'Tst1',
          sftpLink: 'sftpTst1',
          adLink: 'AD tst1'
        },
        {
          name: 'Tst2',
          sftpLink: 'sftpTst2',
          adLink: 'AD tst2'
        }
      ]
    }
  },

  created: function () {
    this.universities = this.getUniversitiesList()
  },

  computed: {
    page () {
      return this.$store.getters.getAdminPageByPath(this.$route.path)
    }
  },

  methods: {
    saveUniversity () {
      this.axios
        .post('/universities', this.university)
        .then(response => console.log('response = ' + response))
        .catch(error => console.log('error = ' + error))
    },
    async getUniversitiesList () {
      await this.axios.get('/universities')
        .then(response => {
          console.log()
          this.universities = response.data._embedded.universities
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    fillFields (university) {
      this.university = university
    }
  }
}
</script>

<style scoped>

</style>
