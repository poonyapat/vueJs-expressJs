<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <panel title="Seminar Metadata">
                    <v-text-field
                        label="Title"
                        v-model="seminar.title"
                    >
                    </v-text-field>
                    <v-textarea
                        label="Description"
                        v-model="seminar.description"
                    >
                    </v-textarea>
                    <v-text-field
                        label="Max Attendees"
                        type="number" min=10
                        v-model="seminar.maxAttendees"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Place"
                        v-model="seminar.place"
                    >
                    </v-text-field>
                    <v-btn @click="createSeminar">Create</v-btn>
                </panel>
            </v-flex>
            <v-flex xs8>
                <panel title="Required Information" class="ml-3">

                </panel>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import SeminarService from '@/services/SeminarsService'

export default {
  data () {
    return {
      seminar: {
        title: null,
        description: null,
        maxAttendees: null,
        place: null
      }
    }
  },
  methods: {
    async createSeminar () {
      try {
        const res = await SeminarService.post(this.seminar)
        console.log(res)
        this.seminar = {
          title: null,
          description: null,
          maxAttendees: null,
          place: null
        }
      } catch (error) {
        this.error = error.response.data.error
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
