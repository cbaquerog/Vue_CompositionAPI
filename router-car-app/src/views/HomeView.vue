<script setup>
import cars from "../data/cars.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1>Home view</h1>
    <div class="cars">
      <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car">
        {{ car.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cars {
  display: flex;
}
.cars a {
  text-decoration: none;
  color: black;
  width: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.459);
  margin: 10px;
}
</style>
