<template>
  <h3>Contador = {{ contador }}</h3>
</template>

<script setup>
    import { useCounter } from "../composables/useCounter"

    let contador = useCounter();
</script>
