<script setup>

import ContactForm from '../components/ContactForm.vue'

</script>

<template>
  <main class="text-white d-flex flex-wrap">

    <div class=" w-100 text-center d-flex align-items-center flex-wrap">
      <div class="w-50 g">
        <h1 style="font-family: Inter; font-weight: bolder;" class="w-50 text-center tit w-50" v-motion-slide-left
          :delay="500">ContactUs</h1>
        <div class="text-start w-50 mt-5">
          <h3>¿Tiene preguntas?</h3>
          <h5>Puede ponerse en contacto con nosotros a través del siguiente formulario.</h5>
        </div>
      </div>

      <div class="w-50">

        <ContactForm />

      </div>

    </div>
  </main>
</template>
<!--
<template>
  <main>
    <div class="w-100 d-flex justify-content-around flex-wrap">
      <div class=" w-50 text-center">
      <h1 style="font-family: Inter; font-weight: bolder;" class="text-white tit" v-motion-slide-left :delay="500">ContactUs</h1>
      <div class="text-start w-75 mt-5 text-white">
      <h3>¿Tiene preguntas?</h3>
      <h5>Puede ponerse en contacto con nosotros a través del siguiente formulario.</h5>
    </div>
    </div>
    
      <ContactForm style="border: 3px solid red;" v-motion-fade v-motion-slide-right :delay="1000" />


    </div>
  </main>
</template>
-->

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.contform {
  padding-top: 6rem;
}

.tit {
  font-size: 6rem;
}

.titulo {
  margin-top: 0.6;
  z-index: 12;
  font-family: Roboto;
}

main {
  min-height: 91vh;
  background-color: black;
}

@media (max-width: 1024px) {
  .tit {
    font-size: 4.5rem
  }
}

@media (max-width: 768px) {
  .tit {
    font-size: 4rem
  }
}

@media (max-width: 670px) {
  .tit {
    font-size: 3rem
  }
}

@media (max-width: 500px) {
  .tit {
    font-size: 2.8rem
  }
}
</style>

