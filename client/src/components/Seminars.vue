<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <panel title="Seminars">
        <template slot="menu">
          <v-btn flat @click="$router.push({name: 'SeminarCreator'})">
            <v-icon>add_circle_outline</v-icon>
          </v-btn>
        </template>
        <v-layout column>
          <v-flex v-for="(seminar) in seminars" :key="seminar.id">
            <panel :title="seminar.title" class="ma-2">
              <template slot="menu">
                <v-btn flat @click="$router.push({name: 'ViewSeminar', params: {seminarId: seminar.id}})">
                  <v-icon>streetview</v-icon>
                  view
                </v-btn>
                <p class="center-text v-btn__content ml-2">
                <!-- <p class="center-text ml-2"> -->
                  Max: {{seminar.maxAttendees}}
                </p>
              </template>
              <div class="description">
                <pre> {{seminar.description}} </pre>
              </div>
            </panel>
          </v-flex>
        </v-layout>
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
.description {
  text-align: start;
  max-height: 7.5em;
  overflow: hidden;
}

.center-text {
  width: 6em;
  max-width: 6em;
  /* height: 100%; */
}
</style>
