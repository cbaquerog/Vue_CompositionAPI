<script setup>
import { ref, computed } from "vue";

const showModal = ref(false);
const newNote = ref("");
const errorMessage = ref("");
const notes = ref([]);
const minNoteLength = ref(10);
const hoveredNoteId = ref(null);

const isButtonDisabled = computed(() => {
  if (newNote.value.length < 10) {
    errorMessage.value = "Note Needs to be at least 10 characters long";
    isButtonDisabled.value = true;
    return true;
  } else {
    errorMessage.value = "";
    return false;
  }
});

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

//Como puedo hacer para actualizar el valor de minNoteLength y que se refleje en el template?
const addNote = () => {
  if (isButtonDisabled.value) {
    return;
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date().toLocaleDateString("es"),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
};

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};

const handleMouseEnter = (id) => {
  hoveredNoteId.value = id;
};

const handleMouseLeave = () => {
  hoveredNoteId.value = null;
};
</script>

<template>
  <main>
    <div class="overlay" v-if="showModal">
      <div class="modal">
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="errorMessage">
          {{ errorMessage }}
          <!--{{ minNoteLength.value - newNote.value.length }} characters remaining-->
        </p>
        <button :disabled="isButtonDisabled" @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div
          v-for="note in notes"
          class="card"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
          @mouseenter="handleMouseEnter(note.id)"
          @mouseleave="handleMouseLeave"
        >
          <button
            class="removeCard"
            v-if="hoveredNoteId === note.id"
            @click="deleteNote(note.id)"
          >
            X
          </button>
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}
header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}
.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px 20px 0;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.main-text {
  text-align: left;
}
.date {
  font-size: 12.5px;
  font-weight: bold;
  text-align: left;
}
.overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.modal textarea {
  padding: 5px;
  font-size: 15px;
}
.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}
.modal .close {
  background-color: red;
  margin-top: 7px;
}
.modal p {
  color: red;
}
.removeCard {
  background-color: red;
  color: white;
  font-weight: bold;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  border: 1px solid #999999;
}
</style>
