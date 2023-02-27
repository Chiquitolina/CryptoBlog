<script setup>

const props = defineProps({
    comentario: {},
    typeof: Object
})

</script>

<template>
<div class="text-center rounded bg-dark text-white">

<div class="cardHeader">

<p> Comment from: {{comentario.name}}</p>
</div>
<div class="cardContent">

<p>{{comentario.text}}</p>

</div>

</div>


</template>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>