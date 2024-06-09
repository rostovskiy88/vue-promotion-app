<template>
  <v-app>
    <v-container fluid class="sign-up-page">
      <v-row>
        <v-col cols="12" md="6" class="sign-up-image-container">
          <img src="@/assets/sign-up.png" alt="Sign Up Image" class="sign-up-image" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex align-center justify-center pa-4">
          <v-form>
            <v-text-field label="Name" required></v-text-field>
            <v-text-field label="Age" required></v-text-field>
            <v-text-field label="Email Address" type="email" required></v-text-field>
            <v-text-field label="Password" type="password" required></v-text-field>
            <v-text-field label="Confirm New Password" type="password" required></v-text-field>
            <v-checkbox
              v-model="termsAccepted"
              label="I agree to Product "
              class="terms-checkbox"
            >
              <template #label>
                <span>
                  I agree to Product <router-link to="/terms" class="terms-link">Terms and Policy</router-link>.
                </span>
              </template>
            </v-checkbox>
            <v-btn color="primary" class="full-width">Get started now</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const termsAccepted = ref(false);
</script>

<style scoped>
.sign-up-page {
  height: 100vh;
}
.sign-up-image-container {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-up-image {
  object-fit: cover;
  width: 100%;
  height: 100vh;
}
.terms-link {
  color: #1976d2;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}
.terms-checkbox {
  display: flex;
  align-items: center;
}
.terms-checkbox .v-label {
  white-space: nowrap;
}
</style>
