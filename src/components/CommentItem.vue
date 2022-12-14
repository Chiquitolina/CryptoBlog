<script setup>

const props = defineProps({
    comentario: {},
    typeof: Object
})

</script>

<template>
<div class="text-center rounded bg-dark text-white mt-1">

<div class="cardHeader">

<p> Comment from: {{comentario.name}}</p>
</div>
<div class="cardContent">

<p>{{comentario.text}}</p>

</div>

</div>


</template>