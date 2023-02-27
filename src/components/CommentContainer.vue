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

<div style="border: 3px solid;">

{{actualizarComentarios}}

<p class="bg-dark text-white com text-center">Comentarios {{ comentariosWithId.length }}</p>

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
  margin-top: 0.05rem;
  border-radius: 0 0 6px 6px;
}

</style>