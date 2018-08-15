<template>
    <div class="white elevation-2">
        <v-toolbar fla dense class="cyan" dark>
            <v-toolbar-title> {{title}} </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <slot name="menu" />
            </v-toolbar-items>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
