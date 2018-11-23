<template>
  <div>
    <AdminAtom/>
  </div>
</template>

<script>
import AdminAtom from '../atom/AdminAtom'

export default {
  name: 'Settings',
  computed: {
    page () {
      return this.$store.getters.getPageByPath(this.$route.path)
    }
  },
  components: {
    AdminAtom
  }
}
</script>

<style scoped>

</style>
