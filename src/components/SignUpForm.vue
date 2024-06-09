<template>
  <v-card class="mx-auto signup-card">
    <v-card-title class="headline d-flex justify-center">
      Get started today
    </v-card-title>
    <v-card-subtitle class="text-center">Enter your details to create super account.</v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent="onSignUp">
        <v-row>
          <v-col cols="6">
            <v-text-field
                v-model="name"
                label="Name"
                required
                class="mt-4"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
                v-model="age"
                label="Age"
                required
                class="mt-4"
            ></v-text-field>
          </v-col>
        </v-row>
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
        <v-text-field
            v-model="confirmPassword"
            label="Confirm New Password"
            type="password"
            required
            class="mt-4"
        ></v-text-field>
        <v-checkbox
            v-model="termsAccepted"
            label="I agree to Product Terms and Policy."
            class="mt-4"
        ></v-checkbox>
        <v-btn color="primary" type="submit" block class="mt-4">Get started now</v-btn>
      </v-form>
      <v-divider class="my-4"></v-divider>
      <div class="text-center mb-4">Or sign up with</div>
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
      <v-btn text @click="login">Already have an account? Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const age = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const termsAccepted = ref(false);

const onSignUp = () => {
  console.log('Sign Up:', name.value, age.value, email.value, password.value, confirmPassword.value, termsAccepted.value);
};

const login = () => {
  console.log('Login');
};
</script>

<style scoped>
.signup-card {
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}
.v-btn {
  margin-bottom: 10px;
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
