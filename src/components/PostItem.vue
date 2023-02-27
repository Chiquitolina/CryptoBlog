<script setup>

import {ref} from 'vue'

import user from '../store/profile.js'

import NewComment from '../components/NewComment.vue'

import CommentContainer from '../components/CommentContainer.vue'

import { getComentarios } from '@/firebase/comentarios'

import { deleteComment } from '../firebase/posts.js'

const props = defineProps({
    post: {},
    typeof: Object
})

const tranFecha = (fecha) => {
    let fechaformateada = new Date(fecha).toTimeString()
    return fechaformateada
}

console.log(getComentarios())

</script>

<template>

<div class="card mt-2 con">

<div class="bg-dark author text-white text-center"><span style="font-weight: bold;">{{ post.name }}</span></div>

<div class="bg-dark text-white text-center titpost"><span>{{ post.titulo }}</span></div>



<div class="">

  <p class="w-100 mensaje text-center bg-dark" style="background-color: grey;">
    {{ post.message }}
  </p>
</div>
<p class="w-100 fecha bg-dark text-white text-center"> {{ tranFecha(post.fecha) }} </p>

<div v-if="user && user.displayName == post.name" class="d-flex">
  <button class="btn btn-danger d-flex align-items-center justify-content-center w-50"
    @click="deleteComment(post.id)"><i class="bi bi-trash"></i></button>

  <button class="btn btn-primary d-flex align-items-center justify-content-center w-50" disabled><i
      class="bi bi-pencil"></i></button>
</div>

<NewComment class="mt-1" v-if="user" :postId="post.id"/>


<CommentContainer :postId="post.id"/>
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
}

.author {
  border-radius: 6px 6px 0 0;
}

.btnsearch {
  width: 5rem;
}

.titpost {
  margin-top: 0.1rem;
}

.fecha {
  font-size: 0.7rem;
  margin-top: 0.05rem;
}



button {
  width: 2rem;
  height: 2rem;
  border-radius: 0 0 6px 6px;

}

.cont {
  width: 35%;
  border-radius: 5rem;
}






</style>