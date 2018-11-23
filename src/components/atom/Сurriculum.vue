<template>
  <div id="dynamic-component-demo" class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >{{ tab }}
    </button>

    <keep-alive>
      <component
        v-bind:is="currentTabComponent"
        class="tab"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Сurriculum',
  data: function () {
    return {
      currentTab: 'Home',
      tabs: ['Учебный план', 'Зачётка'],
      tabContent: []
    }
  },

  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },

  methods: {
    async getUniversitiesList () {
      await this.axios.get('/curriculum')
        .then(response => {
          this.tabContent = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }

  .tab-button:hover {
    background: #e0e0e0;
  }

  .tab-button.active {
    background: #e0e0e0;
  }

  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
