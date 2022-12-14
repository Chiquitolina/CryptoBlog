<script setup>

import {ref} from 'vue'

import { addComment } from '../firebase/posts.js'

import { loginWithGoogle } from '../firebase/auth.js'

import user from '../store/profile.js'

const titulo = ref('')
const message = ref('')
const result = ref('')
const fecha = ref('')

const calcularFecha = () => {
  let date = new Date();
  result.value = date.toTimeString();
  return result.value
}

const addNewComment = () => {
  const newComent = {
    id: crypto.randomUUID(),
    titulo: titulo.value,
    name: user.value.displayName,
    message: message.value,
    fecha: Date.now()
  }
  console.log(newComent);
  addComment(newComent)
}

</script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3>New Post</h3>
      </div>
      <div class="modal-body">
        <h6>Author: <span v-if="user">{{user.displayName}}</span></h6>

        <input v-model="titulo" type="text" placeholder="Título">
        
       <textarea v-model="message" rows="6"></textarea>

       <button class="btn btn-primary" @click="addNewComment" data-bs-dismiss="modal">Submit</button>

        </div>
    </div>
  </div>

</template>

<style scoped>

textarea {
    width: 100%;
    font-size: 0.8rem;
    margin-top: 0.5rem;
}

</style>