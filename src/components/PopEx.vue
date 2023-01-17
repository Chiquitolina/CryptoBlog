<script setup>

import user from '../store/profile.js'

import { ref, onMounted } from 'vue';

import FullData from '../components/FullData.vue';

const exchanges = ref([])
const exchangespop = ref([])

onMounted(() => {

fetch('https://api.coingecko.com/api/v3/exchanges')
  .then(response => response.json())
  .then(data => {
    exchanges.value = data
    exchangespop.value = exchanges.value.sort((a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc).slice(0, 4)
  })

}
)


</script>

<template>

<div class="contex d-flex flex-column justify-content-end mt-5">

<div class="w-100 text-start">
  <div class="d-flex w-100 justify-content-between">
      <h4 class=" mt-2 mb-0">Popular Exchanges:</h4>
      <p class=" mt-2 mb-0">View more exchanges <i class="bi bi-box-arrow-up-right"></i>
</p>
  </div>
      <p>(Top #4 Ranked by 24hs Trading Volume in BTC)</p>
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
      <td class="">
        <div class="d-flex flex-column">
        <span>{{exchange.trade_volume_24h_btc.toFixed(2)}}</span>
        <button v-if="user" type="button" class="btn btn-secondary btndata" data-bs-toggle="modal"
              data-bs-target="#exampleModalu">
              Full Data
            </button>
          </div></td>
    </tr>
  </tbody>
</table>
</div>
</div>
 <!-- Modal -->
 <div class="modal fade" id="exampleModalu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <FullData />
  </div>
    
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

table {
  font-family: Inter;
  font-size: 0.85rem;
  margin-bottom: 0;
  height: 18rem
}

.btndata {
  font-size: 0.6rem;

}

.contex {
  width: 100%;
}

button {
  border-radius: 55px;
}

.cardi {
min-height: auto;
width: 100%;
}

@media (min-width: 1200px) {
  .table-responsive {
    width: 100%;
  }
}

</style>