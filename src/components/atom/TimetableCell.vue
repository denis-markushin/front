<template>
  <td class="text-xs-left">
    <div v-for="(item, index) in day" :key="index">
      <span>Курс: {{ item.course.name }}</span><br/>
      <span>Предмет: {{ item.discipline.name}}</span><br/>
      <span>Аудитория: {{ item.venue}}</span>
    </div>
  </td>
</template>

<script>
export default {
  name: 'TimetableCell',
  props: ['day']
}
</script>

<style scoped>

</style>
