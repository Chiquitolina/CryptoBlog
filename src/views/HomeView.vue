<script setup>

import { ref, onMounted } from 'vue';

import { addComment } from '../firebase/comments.js'


import Header from '../components/Header.vue';
import FooterPrices from '../components/FooterPrices.vue';
import Login from '../components/Login.vue'
import PopEx from '../components/PopEx.vue'
import PopCrypto from '../components/PopCrypto.vue'

</script>

<template style="background-color:black;">

<div class="text-center position-absolute text-black w-100 text-center">

  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">
  <main class=" text-white text-center" style="background-color: black;">
    
    <div class="container d-flex flex-wrap">
      
      <PopCrypto />

<div class="mt-3 w-100 d-flex justify-content-around align-items-center flex-wrap">
<img src="../assets/trading.jpg" id="imghome">
<div class="text-center mt-3">
<p style="font-weight: bold; font-size: 1.5rem; font-family: Inter;">CryptoBlog</p>
<p style="font-family: Roboto; font-size: 2.4rem">YOUR CRYPTO DATA ANALYTICS BLOG</p>
</div>
</div>

<PopEx />

</div>
<div class="mt-4">
    <button type="button" class="btn w-75 botoneshome" data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</button>
    <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <Login />
</div>

    <p class="mt-2" style="font-family: Inter; font-weight:bolder">or</p>
    <button type="button" class="btn w-75 botoneshome">Register</button>
    <p>To acces the full data</p>
  </div>
  
  </main>
  
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.botoneshome {

  border-radius: 55px;
  background-color: #FF7A00;
  color: black;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-weight: 700;
  color: whitesmoke;
}

.titulo {
  margin-top: 0.3;
  z-index: 12; 
  font-family: Roboto;
}

.transparent {
  background-color:rgba(255, 255, 255, 0.8)
}

.modal {
  margin-top: 3rem;
}

#imghome {
  width: 100%; 
  border-radius: 30px;
}




input[type=password], .form-check {
  margin-top: 1rem;
}

.btngoog {
  border: 1px solid grey;
  font-size: 0.7rem;
  font-weight: bolder;
}

button {
  border-radius: 55px;
}

table {
  font-family: Inter;
  font-size: 0.85rem;
  margin-bottom: 0;
  height: 18rem
}

.cardi {
min-height: auto;
width: 100%;
}

.btndata {
  font-size: 0.5rem;

}


@media screen and (min-device-width: 1200px)
{
  #imghome {
  width: 100%; 
  border-radius: 30px;
}
}

</style>


