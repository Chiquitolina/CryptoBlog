<script setup>

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

<div class="w-100">
      <h5 class="text-center mt-2 mb-0">Popular Exchanges:</h5>
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
      <td class=""><span>{{exchange.trade_volume_24h_btc.toFixed(2)}}</span>
        <button type="button" class="btn btn-secondary btndata" data-bs-toggle="modal"
              data-bs-target="#exampleModalu">
              Full Data
            </button></td>
    </tr>
  </tbody>
</table>
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

button {
  border-radius: 55px;
}

.cardi {
min-height: auto;
width: 100%;
}

</style>