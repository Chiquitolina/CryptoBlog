<script>

</script>

<template>
    <div class="text-center position-absolute text-black titulo w-100 text-center">
  <h1 style="font-family: Roboto; font-size: 3rem;">CONTACT</h1>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%;">
    <div class="w-100 d-flex justify-content-center">

    <div class=" formcon d-flex flex-column align-items-center" style="background-color: white">
      <form  class="w-75">
  <div class="form-group">
    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Email adress">
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Subject">
  </div>
  <div class="form-group">
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Your message"></textarea>
  </div>
  <button type="submit" class="btn btn-primary d-flex">Submit</button>
</form>

    </div>
  </div>
    
</template>

<style scoped>

.titulo {
  z-index: 12; 
  font-family: Roboto;
}

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

