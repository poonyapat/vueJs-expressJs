<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <seminars-searcher class="mb-3"></seminars-searcher>
      <seminars-panel></seminars-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SeminarsPanel from '@/components/SeminarsPanel'
import SeminarsSearcher from '@/components/SeminarsSearcher'
export default {
  components: {
    SeminarsPanel, SeminarsSearcher
  }
}
</script>
