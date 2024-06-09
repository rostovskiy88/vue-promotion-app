<template>
  <v-app>
    <v-container fluid class="signup-page">
      <v-row>
        <v-col cols="12" md="6" class="signup-image-container">
          <img src="@/assets/sign-up.png" alt="Sign Up Image" class="signup-image" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center pa-4">
          <SignUpForm />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import SignUpForm from '@/components/SignUpForm.vue';
</script>

<style scoped>
.signup-page {
  height: 100vh;
}
.signup-image-container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-image {
  object-fit: cover;
  width: 100%;
  height: 100vh;
}
</style>
