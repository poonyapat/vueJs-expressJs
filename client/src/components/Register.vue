<template>
    <div>
        <h1>Register</h1>
        <input v-model="email" type="email" name="email" placeholder="email..."/>
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
      email: "",
      password: ""
    };
  },
  watch: {
    email(newValue) {
      console.log("email has changed to", newValue);
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      this.email = ""
      this.password = ""
      console.log(response.data.message)
    }
  },
  mounted() {
    setTimeout(()=>{
      this.email = "hello world"
    }, 3000)
  },
};
</script>
