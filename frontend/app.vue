<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>Kursy Walut</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToPage('/')">Strona Główna</v-btn>
      <v-btn text @click="goToPage('/Calculator')">Kalkulator</v-btn>
      <v-btn text @click="goToPage('/Contact')">Kontakt</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage = (page) => {
  router.push(page);
};
</script>
