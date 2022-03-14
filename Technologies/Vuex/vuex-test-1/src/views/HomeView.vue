<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import CounterSquared from '@/components/CounterSquared.vue'
import ColorCode from '@/components/ColorCode.vue'


export default {
  name: 'HomeView',
  components: {
    Counter,
    CounterSquared,
    "Buttons": require("@/components/Buttons.vue").default,
    ColorCode
}
}
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {font-size: 80px;}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>