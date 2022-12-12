<script setup>

import user from '../store/profile.js'

const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>

<div class="card mt-2 w-75">

<div class="bg-dark author text-white text-center"><span>Author: {{ post.name }}</span></div>

<div class="bg-dark text-white text-center titpost"><span>{{ post.titulo }}</span></div>



<div class="">

  <p class="w-100 mensaje text-center rounded bg-white" style="background-color: grey;">
    {{ post.message }}
  </p>
</div>
<p class="w-100 fecha bg-dark text-white"> {{ post.fecha }} </p>

<div v-if="user && user.displayName == post.name" class="d-flex">
  <button class="btn btn-danger d-flex align-items-center justify-content-center"
    @click="deleteComment(comment.id)"><i class="bi bi-trash"></i></button>

  <button class="btn btn-primary d-flex align-items-center justify-content-center" disabled><i
      class="bi bi-pencil"></i></button>
</div>
</div>

</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.mensaje {
  min-height: 5rem;
  border-radius: 0 0 6px 6px;
}

.author {
  border-radius: 6px 6px 0 0;
}

.btnsearch {
  width: 5rem;
}

.titpost {
  border-radius: 0 0 6px 6px;
  margin-top: 0.1rem;
}

.fecha {
  font-size: 0.7rem;
  border-radius: 0 0 6px 6px;
}



</style>