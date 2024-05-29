<script setup>
import Header from './components/Header.vue';
import Counter from './components/TheCounter.vue';
import Buttons from './components/TheButtons.vue';
</script>

<template>
<div id="counter-container">
  <Header />
  <Counter :contador="contador" />
  <Buttons />
</div>
</template>

<style>
#counter-container {
  margin: 5px;
  padding: 10px;
  min-width: 500px;
  background-color: aquamarine;
  border-radius: 25px;
}
</style>