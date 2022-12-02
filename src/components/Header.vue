<script setup>

import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <nav class="navbar navbar-expand-lg" style="background-color: black;">
  <div class="container-fluid">
    
    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><h5 class="text-end">CryptoBlog</h5></a>
  </div>
</nav>
<div class="cla offcanvas offcanvas-top h-50 w-50 text-white bg-dark w-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <a class="navbar-brand" href="#"><h5 class="text-end">CryptoBlog</h5></a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-center">
     <div data-bs-dismiss="offcanvas"><RouterLink to="/">Home</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/about">About</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/contact">Contact</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/work">Work with us</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/contact">Favs</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/rules">Rules & Polices</RouterLink></div>
  </div>
</div>
</template>

<style scoped>

.nav {
  background-color: black;
  box-shadow: 0px 14px 28px -19px rgba(0,0,0,0.75);
 }

 header {}

 .cla {
  border-radius: 0 0 34px 0;
 }

 .la {
  margin-top: 1rem;
 }

 h5 {
    color: white;
    font-size: 1.5rem;
    font-family: Inter;
    font-weight: Bold;
 }

</style>