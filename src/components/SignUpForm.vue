<template>
  <v-card class="pa-8" max-width="500">
    <v-card-title>
      <v-row align="center" justify="center">
        <v-icon class="mr-2">mdi-hand-wave</v-icon>
        <span class="headline">Get started today</span>
      </v-row>
    </v-card-title>
    <v-card-subtitle class="text-center">Enter your details to create super account.</v-card-subtitle>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Name" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Age" required></v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="Email Address" type="email" required></v-text-field>
      <v-text-field label="Password" type="password" required></v-text-field>
      <v-text-field label="Confirm New Password" type="password" required></v-text-field>
      <v-checkbox v-model="agree" label="I agree to Product <router-link to='/terms' class='terms-link'>Terms and Policy</router-link>"></v-checkbox>
      <v-btn :disabled="!agree" color="primary" class="mt-4" block>Get started now</v-btn>
      <v-divider class="my-4"></v-divider>
      <p class="text-center">Or sign up with</p>
      <v-row class="d-flex justify-center">
        <v-btn icon>
          <v-icon>mdi-google</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </v-row>
      <p class="text-center mt-4">Already have an account? <router-link to="/login">Login</router-link></p>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const agree = ref(false);
</script>

<style scoped>
.headline {
  font-weight: bold;
}
.terms-link {
  color: blue;
}
</style>
