<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <div class="white elevation-2">
          <panel title="Register">
            <v-text-field
              label="Username"
              v-model="username"
            >
            </v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              autocomplete="new-password"
            >
            </v-text-field>
            <div v-html="error" class="err"></div>
            <br>
            <v-btn class="cyan" @click="register" dark>Register</v-btn>
          </panel>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/authenticationService'
import Panel from '@/components/Panel'
export default {
  name: 'Register',
  data: () => {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  watch: {
    username (newValue) {
      console.log('username has changed to', newValue)
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          username: this.username,
          password: this.password,
          role: 'External User'
        })
        this.username = ''
        this.password = ''
        this.error = ''
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
.err {
  color: red;
}
</style>
