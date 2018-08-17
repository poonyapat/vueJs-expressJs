<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <seminars-searcher class="mb-3"></seminars-searcher>
      <seminars-panel></seminars-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SeminarsPanel from './SeminarsPanel'
import SeminarsSearcher from './SeminarsSearcher'
export default {
  components: {
    SeminarsPanel, SeminarsSearcher
  }
}
</script>
