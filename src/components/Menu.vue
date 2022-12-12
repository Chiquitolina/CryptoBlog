<script>

</script>

<template>

<div class="offcanvas-header">
    <a class="navbar-brand" href="#"><h5 class="text-end">CryptoBlog</h5></a>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body text-start d-flex">
   <div>
     <div data-bs-dismiss="offcanvas"><i class="bi bi-house-fill"></i><RouterLink to="/">Home</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><i class="bi bi-back"></i><RouterLink to="/about">About</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><i class="bi bi-envelope"></i><RouterLink to="/contact">Contact</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><i class="bi bi-briefcase"></i><RouterLink to="/work">Work with us</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><i class="bi bi-book"></i><RouterLink to="/rules">Rules & Polices</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas"><i class="bi bi-grid-1x2-fill"></i><RouterLink to="/posts">Posts</RouterLink></div>
        <div class="la" data-bs-dismiss="offcanvas" @click="logout"><i class="bi bi-grid-1x2-fill"></i><RouterLink to="/posts">LOG OUT</RouterLink></div>
        </div>
        <div>
         <div class="la mt-0" data-bs-dismiss="offcanvas"><i class="bi bi-person-bounding-box ml-3"></i><RouterLink to="/profile">Profile</RouterLink></div>
        </div>
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

 i {
   padding: 1rem;
 }

</style>