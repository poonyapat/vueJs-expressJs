<template>
    <panel title="Search">
        <v-text-field
            label="Seminar Title..."
            v-model="searchValue"
        >
        </v-text-field>
    </panel>
</template>

<script>
import _ from 'lodash'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  watch: {
    searchValue: _.debounce(async function (value) {
      const route = {
        name: 'seminars'
      }

      if (this.searchValue !== '') {
        route.query = {
          search: this.searchValue
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.searchValue = value
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
