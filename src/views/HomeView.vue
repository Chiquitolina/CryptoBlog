<script setup>

import { ref, onMounted } from 'vue';

import Header from '../components/Header.vue';
import FooterPrices from '../components/FooterPrices.vue';

const coins = ref([])
const exchanges = ref([])
const nfts = ref([])
const nftspop = ref([])
const exchangespop = ref([])
const popularess = ref([])
const coins24hs = ref([])
const json = ref({})
const jsonn = ref({})

let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
let wss = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')

ws.onmessage = (event) => {
  json.value = JSON.parse(event.data)
}

wss.onmessage = (event) => {
  jsonn.value = JSON.parse(event.data)
}


onMounted(() => {

  fetch('https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_asc')
    .then(response => response.json())
    .then(data => {
      nfts.value = data
      nftspop.value = nfts.value.slice(0, 4)
      console.log(nftspop.value)
    })

  fetch('https://api.coingecko.com/api/v3/exchanges')
    .then(response => response.json())
    .then(data => {
      exchanges.value = data
      exchangespop.value = exchanges.value.sort((a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc).slice(0, 4)
    })
  
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
<div class="text-center position-absolute text-black w-100 text-center">

  </div>
    <img id="ellipse" src="../assets/h2.png" style="max-width: 100%; width: 100%; height: 13.5rem;">
  <main class=" text-white text-center" style="background-color: black;">
    
    <div class="container d-flex flex-wrap">
      <div class="w-100">
      <h5 class="text-center mt-2 mb-0">Popular Cryptocurrencies:</h5>
    </div>
    <div class="table-responsive card cardi mt-3 col-12 col-md-4">
    <table class="table table-hover table-dark">
  <thead style="border-radius: 54px;">
    <tr>
      <th scope="col">Currency</th>
      <th scope="col">Price</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="coin in popularess">
      <td>
        <div class="d-flex flex-column align-items-center"><img v-bind:src="coin.image" style="width: 1.7rem; display: block;">
        {{coin.name}}</div>
      </td>

      <td class="d-flex flex-column justify-content-center align-items-center h-100"><span>{{coin.current_price}}</span><span>({{coin.price_change_percentage_24h.toFixed(2)}}%)</span>
      
        <button class="btn btn-secondary btndata">Full data</button></td>
    </tr>
  </tbody>
</table>
</div>
<div class="mt-3 w-100 d-flex justify-content-around align-items-center flex-wrap">
<img src="../assets/trading.jpg" style=" width: 100%; border-radius: 30px;">
<div class="text-center mt-3">
<p style="font-weight: bold; font-size: 1.5rem; font-family: Inter;">CryptoBlog</p>
<p style="font-family: Roboto; font-size: 2.4rem">YOUR CRYPTO DATA ANALYTICS BLOG</p>
</div>
</div>
<div class="w-100">
      <h5 class="text-center mt-2 mb-0">Popular Exchanges:</h5>
    </div>
<div class="table-responsive card cardi mt-3 col-12 col-md-4">
  <table class="table table-hover table-dark">
  <thead style="border-radius: 54px;">
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">24hs Trading Volume (BTC)</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="exchange in exchangespop">
      <th scope="row"><img v-bind:src="exchange.image" style="width: 1.5rem"></th>
      <td>{{exchange.name}}</td>
      <td class=""><span>{{exchange.trade_volume_24h_btc.toFixed(2)}}</span>
        <button class="btn btn-secondary btndata w-75">Full data</button></td>
    </tr>
  </tbody>
</table>
</div>

</div>
<div class="mt-4">
    <button type="button" class="btn w-75 botoneshome" data-bs-toggle="modal" data-bs-target="#exampleModal">Log in</button>
    <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group">
    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
  </div>
  <div class="form-group">
    <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Email adress">
  </div>
  <div class="form-check text-black d-flex w-50 justify-content-between">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Stay logged
  </label>
</div>
<div class="form-group text-black text-start">
  <p>Forgot your password? <a href="">Get help signin in.</a></p>
</div>
<button type="button" class="btn btngoog w-100">CONTINUE WITH GOOGLE</button>
      </div>
      <div class="modal-footer w-100 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-secondary">Submit</button>
      </div>
    </div>
  </div>
</div>

    <p class="mt-2" style="font-family: Inter; font-weight:bolder">or</p>
    <button type="button" class="btn w-75 botoneshome">Register</button>
    <p>To acces the full data</p>
  </div>
  
  </main>

  <FooterPrices class="footer" />
  
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.botoneshome {

  border-radius: 55px;
  background-color: #FF7A00;
  color: black;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-weight: 700;
  color: whitesmoke;
}

.titulo {
  z-index: 12; 
  font-family: Roboto;
}

.transparent {
  background-color:rgba(255, 255, 255, 0.8)
}

.modal {
  margin-top: 3rem;
}



input[type=password], .form-check {
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

table {
  font-family: Inter;
  font-size: 0.85rem;
  margin-bottom: 0;
  height: 18rem
}

.cardi {
min-height: auto;
width: 100%;
}

.btndata {
  font-size: 0.5rem;

}

.footer {
  position: sticky;
  bottom: 0;
}

</style>


