<script setup>

import { loginWithGoogle } from '../firebase/auth.js'

</script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="text-black text-start">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Name">
        </div>
        <div class="form-group">
          <input type="password" class="form-control form-control-sm" id="exampleInputPassword1"
            placeholder="Email adress">
        </div>
        <div class="form-check text-black d-flex w-50">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Stay logged
          </label>
        </div>
        <div class="form-group text-black text-start">
          <p>Forgot your password? <a href="">Get help signin in.</a></p>
        </div>
        <button type="button" class="btn btngoog w-100" >CONTINUE WITH GOOGLE <i class="bi bi-google"></i></button>
      </div>
      <div class="modal-footer w-100 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-secondary" @click="loginWithGoogle">Submit</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
input[type=password],
.form-check {
  margin-top: 1rem;
}

.btngoog {
  border: 1px solid grey;
  font-size: 0.7rem;
  font-weight: bolder;
}

button {
  border-radius: 55px;
}

h5 {
  font-weight: bolder;
}
</style>