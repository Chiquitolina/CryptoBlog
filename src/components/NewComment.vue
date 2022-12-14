<script setup>

import user from '../store/profile.js';

import { addComentario } from '../firebase/comentarios.js';
import { ref } from 'vue';

const texto = ref('');
const props = defineProps({
    postId: '',
    typeOf: String
})
const addNewComentario = () => {
    let newComentario = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
    }
    addComentario(newComentario)
    texto.value = ''
}


</script>

<template>

<form @submit.prevent="addNewComentario">
<div class="form-group d-flex">
<input v-model="texto" class="w-75" type="text">
<button class="w-25 combtn">Comentar</button>
</div>
</form>


</template>


<style scoped>

form button {
    border-radius: 0 1rem 1rem 0;
  height: 2rem;

}

form input {
    border-radius: 1rem 0 0 1rem;
}

</style>