<script setup>

import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue'

import FooterPrices from './components/FooterPrices.vue'


</script>
<template style="font-family: Inter">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<Header />
<RouterView />
</template>

<style scoped>

  .footer {
  position: sticky;
  bottom: 0;
}



</style>
