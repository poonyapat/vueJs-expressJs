<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <div class="white elevation-2">
          <v-toolbar fla dense class="cyan" dark>
            <v-toolbar-title> Login </v-toolbar-title>
          </v-toolbar> 
          <div class="pl-4 pr-4 pt-2 pb-2">
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
          </div>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/authenticationService'
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
        this.error = ''
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.err {
  color: red;
}
</style>
