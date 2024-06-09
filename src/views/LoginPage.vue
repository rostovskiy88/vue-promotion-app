<template>
  <v-app>
    <v-container fluid class="login-page">
      <v-row>
        <v-col cols="12" md="6" class="login-image-container">
          <img src="@/assets/login-image.png" alt="Login Image" class="login-image" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center pa-4">
          <LoginForm />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
</script>

<style scoped>
.login-page {
  height: 100vh;
}
.login-image-container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-image {
  object-fit: cover;
  width: 100%;
  height: 100vh;
}
</style>
