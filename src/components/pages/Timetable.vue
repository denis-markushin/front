<template>
  <v-layout align-center justify-center class="tableLayout">
    <TimetableAtom/>
  </v-layout>
</template>

<script>
import TimetableAtom from '../atom/TimetableAtom'

export default {
  name: 'Timetable',
  computed: {
    page () {
      return this.$store.getters.getPageByPath(this.$route.path)
    }
  },
  components: {
    TimetableAtom
  }
}
</script>

<style scoped>
  .tableLayout {
    display:inline;
    table-layout:fixed;
  }
</style>
