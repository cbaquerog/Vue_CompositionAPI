<template>
    <button @click="restar">-</button>
    <button @click="incrementar">+</button>
    <button @click="resetCounter">Reset</button>
</template>

<script setup>
import { useCounter } from "../composables/useCounter"

let {incrementar, restar, resetCounter} = useCounter()
</script>

<style scoped>
button {
    margin: 0px 10px 0 10px;
    font-weight: bold;
}
</style>