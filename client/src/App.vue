<template>

  <div id="app">
    <v-app>
      <page-header/>
      <!-- <img src="./assets/logo.png"> -->
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
    
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-text-field__slot input {
  border-bottom: 1px solid black;
}

.v-text-field__slot .v-label {
  color: #aaaaaa;
}
</style>
