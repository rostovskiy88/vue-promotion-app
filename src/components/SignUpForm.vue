<template>
  <v-form>
    <h1 class="title">Get started today</h1>
    <p class="subtitle">Enter your details to create super account.</p>

    <v-text-field label="Name" required></v-text-field>
    <v-text-field label="Age" required></v-text-field>
    <v-text-field label="Email Address" required></v-text-field>
    <v-text-field label="Password" type="password" required></v-text-field>
    <v-text-field label="Confirm New Password" type="password" required></v-text-field>

    <v-checkbox v-model="termsAccepted">
      <template #label>
        I agree to Product <router-link to="/terms" class="terms-link">Terms and Policy</router-link>.
      </template>
    </v-checkbox>

    <v-btn :disabled="!termsAccepted" class="submit-button" color="primary">Get started now</v-btn>

    <div class="social-login">
      <p>Or sign up with</p>
      <div class="social-buttons">
        <v-btn icon>
          <img src="@/assets/google-icon.png" alt="Google" />
        </v-btn>
        <v-btn icon>
          <img src="@/assets/facebook-icon.png" alt="Facebook" />
        </v-btn>
      </div>
    </div>

    <p class="login-link">Already have an account? <router-link to="/login">Login</router-link></p>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const termsAccepted = ref(false);
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  margin-bottom: 24px;
}

.submit-button {
  width: 100%;
  margin: 24px 0;
}

.social-login {
  text-align: center;
  margin: 24px 0;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.login-link {
  text-align: center;
  margin-top: 24px;
}

.terms-link {
  color: #1976d2;
  text-decoration: none;
}
</style>
