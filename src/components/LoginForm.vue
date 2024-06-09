<template>
  <v-form>
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
    <v-checkbox
      v-model="agreeToTerms"
      :rules="[v => !!v || 'You must agree to continue!']"
      class="terms-checkbox"
      hide-details
    >
      <template #label>
        <span>I agree to the <router-link to="/terms" class="terms-link">Terms and Policy</router-link>.</span>
      </template>
    </v-checkbox>
    <v-btn type="submit" color="primary" @click="onLogin">Sign in</v-btn>
    <v-divider class="my-4"></v-divider>
    <div class="social-login">
      <v-btn color="primary" icon>
        <v-icon>mdi-google</v-icon>
      </v-btn>
      <v-btn color="primary" icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const agreeToTerms = ref(false);
const router = useRouter();

const onLogin = () => {
  if (agreeToTerms.value) {
    // Handle login
  } else {
    alert('You must agree to the terms and policy.');
  }
};
</script>

<style scoped>
.terms-checkbox {
  margin-top: 16px;
}
.terms-link {
  color: blue;
  text-decoration: underline;
}
</style>
