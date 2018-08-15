<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <div class="white elevation-2">
          <panel title="Login">
            <v-text-field
              label="Username"
              v-model="username"
            >
            </v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
            >
            </v-text-field>
            <div v-html="error" class="err"></div>
            <br>
            <v-btn class="cyan" @click="login" dark>Login</v-btn>
          </panel>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/authenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = ''
        this.$router.push({name: 'Home'})
      } catch (error) {
        console.log(error.response)
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
.err {
  color: red;
}
</style>
