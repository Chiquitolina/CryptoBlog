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

<div class="d-flex text-white justify-content-around" style="font-family: Inter; background-color: black;">
<h6 style="font-size: 0.8rem">BTC: {{json.p}} USDT</h6>
<h6 style="font-size: 0.8rem">ETH: {{jsonn.p}} USDT</h6>
</div>

</template>