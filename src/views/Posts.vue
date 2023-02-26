<script setup>

import { ref } from 'vue';
import { addComment, deleteComment } from '../firebase/posts.js'
import user from '../store/profile.js'

import NewPost from '../components/NewPost.vue'
import PostItem from '../components/PostItem.vue'

import  { posts } from '../store/comments.js'

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

      <!-- Button trigger modal -->

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <NewPost />
      </div>


      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-dark btnsearch rounded" type="submit" disabled><i class="bi bi-search"></i></button>

      </form>
      <button v-if="user" class="btn btn-secondary newpostbtn mt-1 rounded" data-bs-toggle="modal"
        data-bs-target="#exampleModal">New Post</button>

      <div class="w-75 d-flex flex-wrap justify-content-around mt-3">

      <PostItem v-for="post in posts" :post="post" />

    </div>

    </div>


  </main>


</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modal {
  margin-top: 3rem;
}

.newpostbtn {
  width: 5rem;
  border-radius: 6px 6px 0 0;
}

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
  border-radius: 0 0 6px 6px;

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