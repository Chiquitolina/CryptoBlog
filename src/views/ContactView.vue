<script setup>

import ContactForm from '../components/ContactForm.vue'

</script>
<template>
  <main>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%;">
    <div class="w-100 d-flex justify-content-around " style="margin-top: -10rem;">
      <div class=" w-25 text-center">
      <h1 style="font-family: Inter; font-weight: bolder; font-size: 6rem;" class="text-white" v-motion-slide-left :delay="500">ContactUs</h1>
      <div class="text-start mt-5 text-white">
      <h3>¿Tiene preguntas?</h3>
      <h5>Puede ponerse en contacto con nosotros a través del siguiente formulario.</h5>
    </div>
    </div>

      <ContactForm v-motion-fade v-motion-slide-right :delay="1000" />


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

