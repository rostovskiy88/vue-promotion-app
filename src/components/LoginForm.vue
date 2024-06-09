<template>
  <v-card class="mx-auto login-card">
    <v-card-title class="headline d-flex justify-center">
      👋 Welcome back
    </v-card-title>
    <v-card-subtitle class="text-center">Sign in to manage your account.</v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="onLogin">
        <v-text-field
            v-model="email"
            label="Email Address"
            type="email"
            required
            class="mt-4"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            class="mt-4"
        ></v-text-field>
        <a href="#" class="forgot-password">Forgot your password?</a>
        <v-btn color="primary" type="submit" block class="mt-4">Sign in</v-btn>
      </v-form>
      <v-divider class="my-4"></v-divider>
      <div class="text-center mb-4">Or do it via other accounts</div>
      <div class="d-flex justify-center">
        <v-btn icon class="social-btn">
          <v-icon size="36px">
            <img src="@/assets/google-icon.png" alt="Google" class="icon">
          </v-icon>
        </v-btn>
        <v-btn icon class="social-btn ml-4">
          <v-icon size="36px">
            <img src="@/assets/facebook-icon.png" alt="Facebook" class="icon">
          </v-icon>
        </v-btn>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="signUp">Don't have an account? Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const onLogin = () => {
  console.log('Login:', email.value, password.value);
};

const signUp = () => {
  console.log('Sign Up');
};
</script>

<style scoped>
.login-card {
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}
.v-btn {
  margin-bottom: 10px;
}
.forgot-password {
  display: block;
  text-align: right;
  margin-top: -10px;
  margin-bottom: 20px;
  color: #1976D2;
  text-decoration: none;
}
.social-btn {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 36px;
  height: 36px;
}
</style>
