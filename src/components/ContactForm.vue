<script setup>


</script>

<template>

<div class=" formcon d-flex flex-column align-items-center w-75" style="background-color: white">
      <form  class="w-75">
  <div class="form-group">
    <input type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required>
  </div>
  <div class="form-group">
    <input type="email" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Email adress" required>
  </div>
  <div class="form-group">
    <input type="text" class="form-control form-control-sm" id="exampleInputText" placeholder="Subject">
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Your message" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary d-flex">Submit</button>
</form>

    </div>

</template>

<style scoped>

.formcon {
  border-radius: 1rem;
  margin-top: -10rem;
}

input, textarea, button {
  margin-top: 1rem;
}

button {
  border-radius: 55px;
  background-color: #FF7A00;
  color: black;
  border: none;
  margin-bottom: 1rem;
}

</style>