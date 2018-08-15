<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <panel title="Seminars">
        <div v-for="seminar in seminars" :key="seminar.id">
          <h1> {{seminar.title}} </h1>
          <p> {{seminar.place}} </p>
          <p> Max: {{seminar.maxAttendees}} </p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SerminarsService from '@/services/SeminarsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      seminars: []
    }
  },
  components: {
    Panel
  },
  async mounted () {
    // do a request to th backend for all the songs
    this.seminars = (await SerminarsService.index()).data
  }
}
</script>

<style scoped>

</style>
