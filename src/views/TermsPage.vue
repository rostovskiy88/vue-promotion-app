<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline">
              Product legal information
            </v-card-title>
            <v-card-text>
              <h2>Privacy Policy</h2>
              <h3>1. The standard Lorem Ipsum passage, used since the 1500s</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <h3>2. The standard Lorem Ipsum passage</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="goBack" color="primary">Back</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.back();
}
</script>

<style scoped>
.v-card {
  margin-top: 20px;
}
</style>
