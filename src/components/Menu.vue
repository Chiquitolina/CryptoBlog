<script>

</script>

<template>

<div class="offcanvas-header">
    <a class="navbar-brand" href="#"><h5 class="text-end">CryptoBlog</h5></a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-center">
     <div data-bs-dismiss="offcanvas"><RouterLink to="/">Home</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/about">About</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/contact">Contact</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/work">Work with us</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/contact">Favs</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/rules">Rules & Polices</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><RouterLink to="/profile">Profile</RouterLink></div>
        <button type="button" class="btn btn-danger" @click="logout">LogOUT</button>
  </div>
    
</template>

<style scoped>

.cla {
  border-radius: 0 0 34px 0;
 }

 .la {
  margin-top: 1rem;
 }

 h5 {
    color: white;
    font-size: 1.5rem;
    font-family: Inter;
    font-weight: Bold;
 }


</style>