<script setup>

import Header from '../components/Header.vue'

import user from '../store/profile.js'

</script>

<template>

    <main>

<div class="text-center position-absolute text-black titulo w-100 text-center">
  <h1 style="font-family: Roboto; font-size: 3rem;">PROFILE</h1>
  </div>
  <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">

  <div class="formcon">

    <img class="imgperfil" :src="user? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'" alt="">    

    <div>
        <h5 class="text-center">{{user.displayName}}</h5>
    </div>

  </div>

<div class="text-black d-flex w-100">
  <div class="w-50 bg-white rounded"><h3>Posts:</h3></div>
  <div class="w-50 bg-white rounded"><h3>Comments:</h3></div>
</div>




</main>
</template>



<style scoped>

main {
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 91vh;
}

.formconn {
    border-radius: 1rem;
}

.formcon {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: -9rem;
}

.imgperfil {
    width: 7rem;
    border-radius: 55px;
    border: 4px solid black;
}

input, textarea, button {
  margin-top: 1rem;
}

</style>