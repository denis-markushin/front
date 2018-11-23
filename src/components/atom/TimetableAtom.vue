<template>
  <v-data-table
    :headers="headers"
    :items="timetables"
    class="elevation-1"
    hide-actions
  >
    <template slot="items" slot-scope="week">
      <td>{{ week.item.startTime }} - {{ week.item.endTime }}</td>
      <CellData :day="week.item.daysOfWeek.MONDAY"/>
      <CellData :day="week.item.daysOfWeek.THURSDAY"/>
      <CellData :day="week.item.daysOfWeek.WEDNESDAY"/>
      <CellData :day="week.item.daysOfWeek.THURSDAY"/>
      <CellData :day="week.item.daysOfWeek.FRIDAY"/>
      <CellData :day="week.item.daysOfWeek.SATURDAY"/>
    </template>
  </v-data-table>
</template>

<script>
import CellData from './TimetableCell'

export default {
  name: 'Timetable',

  data () {
    return {
      headers: [
        {
          text: 'Время',
          align: 'left',
          sortable: false
          // value: 'name'
        },
        {text: 'Понедельник', value: '', sortable: false},
        {text: 'Вторник', value: '', sortable: false},
        {text: 'Среда', value: '', sortable: false},
        {text: 'Четверг', value: '', sortable: false},
        {text: 'Пятница', value: '', sortable: false},
        {text: 'Суббота', value: '', sortable: false}
      ],

      timetables: []
    }
  },

  created: function () {
    this.axios.get('http://localhost:3000/data')
      .then(response => {
        console.log(response.data)
        this.timetables = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  methods: {
  },

  components: {
    CellData
  }
}
</script>

<style scoped>

</style>
