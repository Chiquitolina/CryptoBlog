<script setup>

const props = defineProps({
    comentario: {},
    typeof: Object
})

</script>

<template>
<div class="text-center bg-dark text-white border rounded">

<div class="cardHeader">

<p>{{comentario.name}}</p>
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