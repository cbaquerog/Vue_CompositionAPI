<template>
  <header class="container">
    <h1>Notes</h1>
    <button @click="showModal.value = true" class="addNote">Add Note</button>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

let props = defineProps({
  showModal: {
    type: Boolean,
    required: True,
  },
});

let emit = defineEmits(["update:showModal"]);

function showModal() {
  emit("update:showModal", true);
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addNote {
  font-weight: bold;
  border: 2px solid black;
}
</style>
