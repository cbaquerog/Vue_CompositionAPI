<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute(); //Composable que nos permite extraer info
const router = useRouter(); //Nos permite manipular la info y cambiar la ruta

const carId = parseInt(route.params.id);

const car = cars.find((c) => c.id === parseInt(route.params.id));

const showContact = () => {
  return router.push(`/cars/${carId}/contact`);
};
</script>

<template>
  <div v-if="car">
    <h1>Car view</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <button @click="showContact">Contact info</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>Car not found</h1>
  </div>
</template>
