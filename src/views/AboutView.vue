<template>
  <main>
  <div class="text-center position-absolute text-black titulo w-100 text-white">
    <h2 class="text-black" style="font-family: Roboto; font-size: 3rem;">ABOUT US</h2>
    <h4>We are an <span class="bg-dark rounded p-1">information hub</span> that provides all the analytics, information, and education you need to make informed investment decisions.</h4>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%;">
  <div class="text-white" style="background-color: black">
    
  </div>

  <div class="w-75 d-flex flex-wrap justify-content-around cont">

    <div class="card">
      <h4>Analitycs</h4>
      <img class="imgcard" src="../assets/analitycs.png">
    </div>
    <div class="card">
      <h4>Information</h4>
      <img class="imgcard" src="../assets/information.png">
    </div>
    <div class="card">
      <h4>Education</h4>
      <img class="imgcard" src="../assets/education.png">
    </div>

  </div>

  </main>
</template>

<style>
.titulo {
  margin-top: 0.6rem;
  z-index: 12; 
}

h4 {
  font-weight:600;
  width: 100%;
  font-size: 1.5rem;
}

main {
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 91vh;
}

.card {
  background-color: white;
  width: 20rem;
  text-align: center;
  margin-top: 0.5rem;
}

.cont {
  margin-top: -3rem;
}

.imgcard {
  height: 90%;
}
</style>
