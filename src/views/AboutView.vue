<template>
  <main>
  <div class="text-center position-absolute text-black titulo w-100 text-white">
    <h2 class="text-black" style="font-family: Roboto; font-size: 3rem;">ABOUT US</h2>
    <h4>We are an <span class="bg-dark rounded p-1">information hub</span> that provides all the <span class="bg-dark rounded p-1">analytics, information, and education</span> you need to make informed investment decisions.</h4>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%;">
  <div class="text-white" style="background-color: black">
    
  </div>

  <div class="w-75 d-flex flex-wrap justify-content-around cont">
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h4>Analitycs</h4>
      <img class="imgcard" src="../assets/analitycs.png">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h4>Information</h4>
      <img class="imgcard" src="../assets/information.png">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h4>Education</h4>
      <img class="imgcard" src="../assets/education.png">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
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
  width: 100%;
  height: 14rem
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 16rem;
  height: 20rem;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 1rem;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
}

/* Style the back side */
.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
</style>
