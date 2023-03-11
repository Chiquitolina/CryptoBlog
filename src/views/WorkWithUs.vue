<script>


</script>

<template>
  <main class="text-white">

    <h1 style="font-family: Inter; font-weight: bolder;" class="w-50 text-center tit w-50 pt-5 pb-5" v-motion-slide-left
          :delay="500">WorkWithUs</h1>

    <h3 class="w-100 text-center" style="font-style: italic; font-weight: lighter;">Positions found: 0</h3>


</main>
</template>

<style scoped>

.titulo {
  z-index: 12; 
  font-family: Roboto;
  margin-top: 0.6;
}

.tit {
  font-size: 6rem;
}

h4 {
  font-weight: lighter;
}

main {
  min-height: 91vh;
  background-color: black;
}

.contpuesto {
  border-radius: 3rem;
  opacity: 80%;
  background-color: white;
}
.contpuesto:hover {
  opacity: 100%;
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

@media (max-width: 375px) {
  .tit {
    font-size: 2rem
  }
}


</style>