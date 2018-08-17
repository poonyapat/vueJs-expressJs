<template>
    <panel :title="seminar.title">
      {{seminar.description}}
    </panel>
</template>

<script>
import SeminarsService from '@/services/SeminarsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      seminar: {}
    }
  },
  async mounted () {
    const seminarId = this.$store.state.route.params.seminarId
    this.seminar = (await SeminarsService.show(seminarId)).data
    console.log(this.seminar)
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
