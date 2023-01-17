<script setup>

import {ref} from 'vue';

const json = ref({p: '---'})
const jsonn = ref({p: '---'})

let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
let wss = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade')

ws.onmessage = (event) => {
  json.value = JSON.parse(event.data)
}

wss.onmessage = (event) => {
  jsonn.value = JSON.parse(event.data)
}

</script>

<template>

<div class="d-flex text-white justify-content-around text-center align-items-center" style=";font-family: Inter; background-color: #1B1E21; ">
<div class="bg-white text-black rounded" style="height: 3rem;"><h6 style="font-size: 0.9rem">BTC: {{json.p}}</h6><h6>USDT</h6></div>
<div class="bg-white text-black rounded" style="height: 3rem;"><h6 style="font-size: 0.9rem">BTC: {{json.p}}</h6><h6>USDT</h6></div>
</div>

</template>