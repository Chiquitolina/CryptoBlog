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

{{actualizarComentarios}}

<CommentItem v-for="comentario in comentariosWithId" :comentario="comentario" :key="comentario.id" />

</template>