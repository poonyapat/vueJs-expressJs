<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <panel title="Seminar Metadata">
                    <v-text-field
                        label="Title"
                        v-model="seminar.title"
                        :rules="[rulse.required]"
                    >
                    </v-text-field>
                    <v-textarea
                        label="Description"
                        v-model="seminar.description"
                        :rules="[rulse.required]"
                    >
                    </v-textarea>
                    <v-text-field
                        label="Max Attendees"
                        type="number" min=10 max=10000
                        v-model="seminar.maxAttendees"
                        :rules="[rulse.required]"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Place"
                        v-model="seminar.place"
                        :rules="[rulse.required]"
                    >
                    </v-text-field>
                </panel>
            </v-flex>
            <v-flex xs8>
                <panel title="Required Information" class="ml-3">

                </panel>
            </v-flex>
        </v-layout>
        <span class="danger-alert" v-if="error">{{error}}</span>
        <br>
        <v-btn class="cyan" dark @click="createSeminar">Create</v-btn>
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
      },
      rulse: {
        required: value => !!value || 'Required!'
      },
      error: null
    }
  },
  methods: {
    async createSeminar () {
      this.error = null
      const areAllFieldsFilledIn = await Object.keys(this.seminar).every(key => !!this.seminar[key])
      if (!areAllFieldsFilledIn){
        this.error = "Please fill in all the required fields"
        return
      }
      try {
        const res = await SeminarService.post(this.seminar)
        this.$router.push({name: 'seminars'})
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
.danger-alert {
  color: red;
  text-decoration-style: dashed
}
</style>
