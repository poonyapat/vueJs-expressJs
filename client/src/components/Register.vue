<template>
    <div>
        <h1>Register</h1>
        <input v-model="username" type="username" name="username" placeholder="username..."/>
        <input v-model="password" type="password" name="password" placeholder="password..."/>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from "@/services/authenticationService"
export default {
  name: "Register",
  data: () => {
    return {
      username: "",
      password: ""
    };
  },
  watch: {
    username(newValue) {
      console.log("username has changed to", newValue);
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        username: this.username,
        password: this.password,
        role: "External User"
      })
      this.username = ""
      this.password = ""
    }
  },
};
</script>
