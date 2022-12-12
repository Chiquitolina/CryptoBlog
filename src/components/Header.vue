<script setup>

import Menu from '../components/Menu.vue'

import { RouterLink, RouterView } from 'vue-router'

import { logout } from '../firebase/auth.js'

import user from '../store/profile.js'

function con() {
  console.log(user.value)
}

</script>

<template>
  <nav class="navbar navbar-expand-lg" style="background-color: black;">
    <div class="container-fluid">

      <button class="rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex">
        <img class="photouser" :src="user ? user.photoURL : null" />
        <a class="navbar-brand" href="#">
          <h5 class="text-center" @click="con">CryptoBlog</h5>
        </a>
      </div>
    </div>
  </nav>
  <div class="cla offcanvas offcanvas-top text-white bg-dark w-100" tabindex="-1" id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel">


    <Menu />


  </div>
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.nav {
  background-color: black;
  box-shadow: 0px 14px 28px -19px rgba(0, 0, 0, 0.75);
}

header {}

.cla {
  border-radius: 0 0 34px 0;
  min-height: 65%;
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

.photouser {
  width: 3rem;
  border-radius: 8rem;
}
</style>