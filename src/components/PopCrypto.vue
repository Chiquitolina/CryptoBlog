<script setup>

import user from '../store/profile.js'

import { ref, onMounted } from 'vue';

import FullData from '../components/FullData.vue'

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

<template>

<div class="flex flex-column tab ">

  <div class="w-100 text-start">
    <div class="d-flex w-100 justify-content-between">
      <h4 class=" mt-2 mb-0">Popular Cryptocurrencies:</h4>
      <p class=" mt-2 mb-0">View more markets <i class="bi bi-box-arrow-up-right"></i>
</p>
  </div>
    <p>(Top #4 Ranked by MarketCap)</p>
  </div>
  <div class="table-responsive card cardi mt-3 col-12 col-md-4">
    <table class="table table-hover table-dark w-100">
      <thead style="border-radius: 54px;">
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in popularess">
          <td>
            <div class="d-flex flex-column align-items-center"><img v-bind:src="coin.image"
                style="width: 1.7rem; display: block;">
              {{ coin.name }}</div>
          </td>

          <td class="">
            <p>{{ coin.current_price }}</p>
            <p>({{ coin.price_change_percentage_24h.toFixed(2) }}%)</p>

            <button v-if="user" type="button" class="btn btn-secondary btndata" data-bs-toggle="modal"
              data-bs-target="#exampleModalu">
              Full Data
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  height: 18rem;
}

.tab {
  width: 50%;
}

.btndata {
  font-size: 0.6rem;

}

button {
  border-radius: 55px;
}

.cardi {
  min-height: auto;
  width: 100%;
}

.modal {
  margin-top: 3rem;
}

@media (min-width: 1200px) {
  .table-responsive {
    width: 100%;
  }

  
}

</style>