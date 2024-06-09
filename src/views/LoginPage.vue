<template>
  <v-app>
    <v-container fluid class="login-page">
      <v-row>
        <v-col cols="12" md="6" class="login-image-container">
          <img src="@/assets/login-image.png" alt="Login Image" class="login-image" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center pa-4">
          <div>
            <h2>Welcome back</h2>
            <p>Sign in to manage your account.</p>
            <v-form @submit.prevent="onLogin">
              <v-text-field
                v-model="email"
                label="Email Address"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Sign in</v-btn>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const email = ref('');
const password = ref('');

const onLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};
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
