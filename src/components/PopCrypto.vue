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

<template>

<div class="w-100">
      <h5 class="text-center mt-2 mb-0">Popular Cryptocurrencies:</h5>
      <p>(Top #4 Ranked by MarketCap)</p>
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

      <td class=""><p>{{coin.current_price}}</p><p>({{coin.price_change_percentage_24h.toFixed(2)}}%)</p>
      
        <button type="button" class="btn btn-secondary btndata" data-toggle="modal" data-target="#exampleModali">Full data</button></td>
        
    </tr>
  </tbody>
</table>
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

button {
  border-radius: 55px;
}

.cardi {
min-height: auto;
width: 100%;
}

</style>