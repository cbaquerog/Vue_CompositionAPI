<script setup>
import Header from "./components/Header.vue";
import NotesList from "./components/NotesList.vue";
import AddNote from "./components/AddNote.vue";

import { ref } from "vue";

let showModal = ref(false);

function toggleModal(value) {
  showModal.value = value;
}
</script>

<template>
  <Header :showModal="showModal" @update:showModal="toggleModal" />
  <NotesList :showModal="showModal" />
  <AddNote :showModal="showModal" />
</template>

<style scoped></style>
