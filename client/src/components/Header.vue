<template>
    <v-toolbar fixed dark color="cyan">

    <v-toolbar-title class="white--text mr-4">
        <router-link class="home" tag="span" :to="{name: 'Home'}">
            Vue-Express
            </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat
            :to="{name: 'seminars'}"
        >
            Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            :to="{name: 'Login'}"
        >
                Login
        </v-btn>
        <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat
            :to="{name: 'Register'}"
        >
                Sign Up
        </v-btn>
        <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat
            @click="logout"
        >
                logout
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to home page
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>

<style scoped>
    .home {
        cursor: pointer;
    }

    .home:hover {
        color: #b79a82
    }
</style>
