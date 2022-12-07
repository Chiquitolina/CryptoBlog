<script setup>

import ContactForm from '../components/ContactForm.vue'

</script>
<template>
  <main>
    <div class="text-center position-absolute text-black titulo w-100 text-center">
  <h1 style="font-family: Roboto; font-size: 3rem;">CONTACT</h1>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%;">
    <div class="w-100 d-flex justify-content-center">

    <ContactForm />


  </div>
  </main>
</template>

<style scoped>

.titulo {
  margin-top: 0.6;
  z-index: 12; 
  font-family: Roboto;
}

main {
  min-height: 91vh;
  background-color: black;
}



</style>

