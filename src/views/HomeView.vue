<script setup>

import { ref, onMounted } from 'vue';

import { addComment } from '../firebase/posts.js'


import Header from '../components/Header.vue';
import FooterPrices from '../components/FooterPrices.vue';
import Login from '../components/Login.vue'
import PopEx from '../components/PopEx.vue'
import PopCrypto from '../components/PopCrypto.vue'

</script>

<template style="background-color:black;">

<div class="text-center tit text-black w-100 text-center text-white">
<h1>THE CRYPTO BLOG</h1>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">
  <main class=" text-white text-center" style="background-color: black;">
    
    <div class="container d-flex flex-wrap">

      <div class="w-100 d-flex">
      
      <PopCrypto />

      <div class=" d-flex flex-column align-items-center justify-content-center">
      
        <h1 class="w-50 signuptext">Sign up now to access all the available data</h1>

        <button class="btn botoneshome mt-3">Get started!</button>

      </div>

    </div>

<div class="mt-5 w-100 d-flex justify-content-around align-items-center flex-wrap" v-motion-slide-visible-once-left :delay="600">
<div class="text-center mt-3 asd" v-motion-slide-visible-once-right>
<p style="font-weight: bold; font-size: 2rem; font-family: Inter;">CryptoBlog</p>
<p style="font-family: Roboto; font-size: 2.5rem">YOUR CRYPTO DATA ANALYTICS BLOG</p>
</div>
<img  src="../assets/trading.jpg" id="imghome">
</div>

<PopEx />

</div>
<div class="mt-4">
    <button type="button" class="btn botoneshome" data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</button>
    <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <Login />
</div>

    <p class="mt-2" style="font-family: Inter; font-weight:bolder">or</p>
    <button type="button" class="btn botoneshome" disabled>Register</button>
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

  width: 50%;
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
  width: 85%; 
  border-radius: 30px;
  
}

.tit {
  position: absolute;
  top: 8rem;
  font-family: Inter;
  font-size: 9rem;
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

.signuptext {
  font-size: 2rem;
}


@media (min-width: 1200px) {
  #imghome {
    width: 50%;
  }

  .botoneshome {
    width: 25%;
  }

  .asd {
    width: 25%;
  }
}

</style>


