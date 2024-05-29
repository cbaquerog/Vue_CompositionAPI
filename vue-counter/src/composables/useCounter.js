
import { ref } from "vue"

let contador = ref(0);

export function useCounter() {
  incrementar() {
  contador.value++;
}

function restar() {
  contador.value--;
}

function resetCounter() {
  contador.value = 0;
  }

  return {
    contador,
    incrementar,
    restar,
    resetCounter,
  };
}