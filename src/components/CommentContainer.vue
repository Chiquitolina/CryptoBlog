<script setup>

import {onMounted, computed, ref} from 'vue'

import CommentItem from './CommentItem.vue'

import {comentarios} from '../store/comments.js'

import {getComentarios} from '../firebase/comentarios.js'

const props = defineProps({
    postId: '',
    typeOf: String,
})

const comentariosWithId = ref([])

const actualizarComentarios = computed(() => {
    comentariosWithId.value = comentarios.value.filter(comentario => comentario.postId == props.postId)
})

onMounted( () => {
    getComentarios()
} ) 

</script>

<template>

<div>

{{actualizarComentarios}}

<div class="d-flex bg-dark align-items-center justify-content-around">

<p class="text-white com text-center mb-0 border rounded p-2">Comentarios: {{ comentariosWithId.length }}</p> <button class="btn btn-primary">Show comments</button>

</div>

<CommentItem v-for="comentario in comentariosWithId" :comentario="comentario" :key="comentario.id" />

</div>

</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.com {
  font-size: 0.9rem;
  margin-top: 0.08rem;
}

</style>