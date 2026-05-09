<script setup lang="ts">
import { ref } from "vue";
import { useUiStore } from "../../../stores/ui";

const uiStore = useUiStore();
const amount = ref<number | null>(null);
function handleSubmint() {
  if (!amount) {
    alert("O campo valor é obrigatório!");
  }

  console.log("INSERTING NEW VALUE");
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="handleSubmint">
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-semibold text-foreground">Valor (R$)</label>
      <input
        v-model="amount"
        required
        type="number"
        step="0.01"
        class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all"
        placeholder="0.00"
      />
    </div>

    <!-- ACTIONS -->
    <div class="flex justify-end gap-3 pt-4">
      <button
        type="button"
        @click="uiStore.closeModal()"
        class="px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
      >
        Cancelar
      </button>

      <button
        type="submit"
        class="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all cursor-pointer"
      >
        Salvar
      </button>
    </div>
  </form>
</template>
