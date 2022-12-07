<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Header from './components/Header.vue'

import FooterPrices from './components/FooterPrices.vue'


</script>
<template style="font-family: Inter">
<Header />
<RouterView />
<FooterPrices class="footer" />
</template>

<style scoped>

  .footer {
  position: sticky;
  bottom: 0;
}



</style>
