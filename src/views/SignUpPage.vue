<template>
  <v-app>
    <v-container fluid class="signup-page">
      <v-row>
        <v-col cols="12" md="6" class="signup-image-container">
          <img src="@/assets/sign-up.png" alt="Sign Up Image" class="signup-image" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center pa-4">
          <v-form>
            <h1 class="title">Get started today</h1>
            <p class="subtitle">Enter your details to create super account.</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Name" outlined dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Age" outlined dense></v-text-field>
              </v-col>
            </v-row>
            <v-text-field label="Email Address" outlined dense class="input-width"></v-text-field>
            <v-text-field label="Password" outlined dense type="password" class="input-width"></v-text-field>
            <p class="password-note">Must be 8 characters long at least</p>
            <v-text-field label="Confirm New Password" outlined dense type="password" class="input-width"></v-text-field>
            <v-checkbox
              v-model="termsAccepted"
              :label="'I agree to Product ' + termsLink"
              class="terms-checkbox"
            ></v-checkbox>
            <v-btn color="primary" class="submit-btn" @click="submitForm">Get started now</v-btn>
            <div class="social-login">
              <p>Or sign up with</p>
              <v-btn icon class="social-btn">
                <v-img src="@/assets/google-icon.png"></v-img>
              </v-btn>
              <v-btn icon class="social-btn">
                <v-img src="@/assets/facebook-icon.png"></v-img>
              </v-btn>
            </div>
            <p class="login-link">Already have an account? <router-link to="/login">Login</router-link></p>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const termsAccepted = ref(false);

const termsLink = '<router-link to="/terms" class="terms-link">Terms and Policy</router-link>';

const submitForm = () => {
  // Handle form submission
};
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

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.input-width {
  width: 100%;
}

.password-note {
  font-size: 0.75rem;
  color: gray;
  margin-top: -1rem;
  margin-bottom: 1rem;
}

.terms-checkbox {
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
  margin-bottom: 1rem;
}

.social-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-btn {
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.social-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.login-link {
  text-align: center;
}

.terms-link {
  color: blue;
  text-decoration: underline;
}
</style>
