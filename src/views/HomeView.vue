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

<main class=" text-white text-center" style="background-color: black;">

<div class="text-center tit text-black w-100 text-center text-white"  v-motion-fade :delay="300">
<h1 style="font-family: Inter; font-weight: bolder; font-size: 3rem;">TheCryptoBlog</h1>
  </div>
 
    
    <div class="container d-flex flex-wrap">

      <div class="w-100 d-flex justify-content-around aaa" v-motion-fade :delay="600">
      
      <PopCrypto />

      <div class=" d-flex flex-column align-items-center justify-content-center singuptextcont bg-dark" style="border-radius: 5rem;">
      
        <h1 class="w-50 signuptext">Sign up now to access all the available data</h1>

        <button button type="button" class="btn botoneshome mt-3 w-75" data-bs-toggle="modal" data-bs-target="#exampleModal">Get started!</button>

      </div>

    </div>

<div class="w-100 d-flex justify-content-around align-items-center flex-wrap">
<div class="text-center mt-3 asd " v-motion-slide-visible-once-left :delay="600">
<p style="font-weight: bold; font-size: 2rem; font-family: Inter;">CryptoBlog</p>
<p style="font-family: Roboto; font-size: 2.5rem">YOUR CRYPTO DATA ANALYTICS BLOG</p>
</div>
<img src="../assets/trading.jpg" id="imghome" v-motion-slide-visible-once-right :delay="600">
</div>

<div class="w-100" v-motion-fade-visible-once :delay="600"> 
<PopEx />
</div>

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

.singuptextcont {
  width: 35%;
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
  font-family: Inter;
  font-size: 1rem;
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
    width: 55%;
  }

  .botoneshome {
    width: 25%;
  }

  .asd {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5rem;
    background-color: #1B1E21;
  }
}

@media (max-width: 768px) {
   .signuptext {
    font-size: 1.2rem;
   }

   .aaa {
    display: flex;
    flex-wrap: wrap;
   }

   

}

</style>


