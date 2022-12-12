<script setup>

import { ref } from 'vue';
import { addComment, deleteComment } from '../firebase/comments.js'

import comments from '../store/comments.js'

const name = ref('')
const email = ref('')
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
    name: name.value,
    email: email.value,
    message: message.value,
    fecha: calcularFecha()
  }
  console.log(newComent);
  addComment(newComent)
}


</script>

<template>

  <main>

    <div class="text-center position-absolute text-black titulo w-100 text-center">
      <h1 style="font-family: Roboto; font-size: 3rem;">POSTS</h1>
    </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">

    <div class="cardContainer w-100 d-flex flex-column align-items-center">

      <div class="card mt-2 w-75" v-for="comment in comments">

      <div class="bg-dark rounded text-white text-center"><h6>Author: {{ comment.name }}</h6></div>

        

        <div class="">

          <p class="rounded w-75" style="background-color: grey;">{{ comment.message }}</p>

          <p>{{ comment.email }}</p>


        </div>


        <button class="btn btn-danger d-flex align-items-center justify-content-center" @click="deleteComment(comment.id)"><i class="bi bi-trash"></i></button>

      </div>

    </div>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp"
          placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <textarea v-model="message" class="form-control" id="message" aria-describedby="emailHelp"
          placeholder="Enter email" @keyup.enter="addNewComment"></textarea>
      </div>
      <button @click.prevent="addNewComment">dasdadasdasdasdsaa</button>
    </form>

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

.cardContainer {
  margin-top: -9rem;
}

button {
  width: 2rem;
  height: 2rem;

}
</style>