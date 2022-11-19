<script setup>

import { ref, onMounted } from 'vue';

const coins = ref([])
const popularess = ref([])

onMounted(() => {
  
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24hs')
    .then(response => response.json())
    .then(data => {
      coins.value = data

      popularess.value = coins.value.slice(0, 4)
    })
}
)



</script>

<template style="background-color:black;">
<div class="text-center position-absolute text-black titulo w-100 text-center">
  <h1 style="font-family: Roboto; font-size: 2.5rem;">YOUR <span class="text-white">CRYPTO</span></h1>
  <h1 style="font-family: Roboto; font-size: 2.5rem;">DATA</h1>
  <h1 style="font-family: Roboto; font-size: 2.5rem;">ANALYTICS</h1>
  <h1 class="text-white" style="font-family: Roboto; font-size: 2.5rem;">BLOG</h1>
  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">
  <main class="text-white text-center" style="background-color: black;">
    <div class="d-flex flex-column align-items-center">
      <h5 class="m-2">Popular Cryptocurrencies:</h5>
      <h6>Filter by:</h6>
      <form class="d-flex flex-wrap justify-content-between" style="font-size: 0.9rem;">
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="">
  <label class="form-check-label" for="flexCheckDefault">
    24hs Top Gainers
  </label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
  <label class="form-check-label" for="flexCheckChecked">
    24hs Top Losers
  </label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
  <label class="form-check-label" for="flexCheckChecked">
    24hs MarketCap Change Gainers
  </label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" value="">
  <label class="form-check-label" for="flexCheckDefault">
    24hs MarketCap Change Losers
  </label>
</div>
</form>
        <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">24hs</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="coin in popularess">
      <th scope="row"><img v-bind:src="coin.image" style="width: 2rem"></th>
      <td>{{coin.name}}</td>
      <td>{{coin.current_price}}</td>
      <td>{{coin.price_change_percentage_24h.toFixed(2)}}%</td>
    </tr>
  </tbody>
</table>

    </div>
    <div class="text-center">
    <h5>Latest market news:</h5>
    <div class="w-100 mb-3" style="background-color: white; height: 6rem;"></div>
    <button type="button" class="btn w-75 botoneshome" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Log in</button>
    <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div class="offcanvas-header transparent">
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body small text-black transparent">
    fsdfsfsfsfsfsfsfsfsdfsfdsfsfsf
  </div>
</div>
    <p>or</p>
    <button type="button" class="btn w-75 botoneshome">Register</button>
    <p>To acces the full data</p>
  </div>
  
  </main>
  
</template>

<style scoped>

.botoneshome {

  border-radius: 55px;
  background-color: #FF7A00;
  color: black;
}

.titulo {
  z-index: 12; 
  font-family: Roboto;
}

.transparent {
  background-color:rgba(255, 255, 255, 0.8)
}




</style>


