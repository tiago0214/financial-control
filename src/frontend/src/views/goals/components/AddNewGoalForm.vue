<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useUiStore } from "../../../stores/ui";
import { useGoalsStore } from "../../../stores/goals";
import { useToast } from "primevue";
import { toLocalISOString } from "../../../lib/date";

const uiStore = useUiStore();
const goalsStore = useGoalsStore();

const toast = useToast();

const defaultDate = toLocalISOString(new Date()).split("T")[0]; // Get only the date part in YYYY-MM-DD format

const title = ref("");
const targetAmount = ref<number | null>(null);
const targetDate = ref(defaultDate);
const selectedIcon = ref("Plane");
const isEditing = computed(() => !!goalsStore.selectedGoalId);

function closeAndClean() {
  goalsStore.selectGoal(null);
  uiStore.closeModal();
  // Reset form
  title.value = "";
  targetAmount.value = null;
  targetDate.value = defaultDate;
  selectedIcon.value = "Plane";
}

function handleSubmit() {
  if (!title.value || !targetAmount.value || !targetDate.value) {
    alert("Preencha os campos obrigatórios");
    return;
  }

  if (isEditing.value) {
    goalsStore.updateGoal({
      title: title.value,
      targetAmount: targetAmount.value,
      targetDate: targetDate.value,
      iconString: selectedIcon.value,
    });

    toast.add({
      severity: "success",
      summary: "Sucesso",
      detail: "Meta atualizada com sucesso!",
      life: 3000,
    });
  } else {
    goalsStore.addGoal({
      title: title.value,
      targetAmount: targetAmount.value,
      targetDate: targetDate.value,
      iconString: selectedIcon.value,
      aiInsight:
        "Sua meta foi criada! Assim que você economizar seus primeiros valores, te ajudaremos com insights.",
    });

    toast.add({
      severity: "success",
      summary: "Sucesso",
      detail: "Nova meta adicionada com sucesso!",
      life: 3000,
    });
  }

  closeAndClean();
}

onMounted(() => {
  if (goalsStore.selectedGoalId) {
    const goalToEdit = goalsStore.userGoals.find(
      (g) => g.id === goalsStore.selectedGoalId,
    );
    if (goalToEdit) {
      title.value = goalToEdit.title;
      targetAmount.value = goalToEdit.targetAmount;
      targetDate.value = goalToEdit.targetDate;
      selectedIcon.value = goalToEdit.iconString;
    }
  }
});

onBeforeUnmount(() => {
  if (goalsStore.selectedGoalId) {
    goalsStore.selectGoal(null);
  }
});
</script>
<template>
  <!-- Formulário de Nova Meta -->
  <form class="space-y-5" @submit.prevent="handleSubmit">
    <!-- Título da Meta -->
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-semibold text-foreground"
        >Título da Meta <span class="text-accent text-sm">*</span></label
      >
      <input
        v-model="title"
        required
        type="text"
        class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all"
        placeholder="Ex: Viagem para Europa"
      />
    </div>

    <!-- Valor Alvo e Data Alvo -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground"
          >Valor Alvo (R$)<span class="text-accent text-sm">*</span>
        </label>
        <input
          v-model="targetAmount"
          required
          type="number"
          step="0.01"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all"
          placeholder="0.00"
        />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground"
          >Data Alvo <span class="text-accent text-sm">*</span></label
        >
        <input
          v-model="targetDate"
          required
          type="date"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all text-foreground"
        />
      </div>
    </div>

    <!-- Ícone -->
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm font-semibold text-foreground">Ícone</label>
        <select
          v-model="selectedIcon"
          class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer"
        >
          <option value="Plane">✈️ Avião</option>
          <option value="Car">🚗 Carro</option>
          <option value="Home">🏠 Casa</option>
          <option value="Star">✨ Estrela</option>
        </select>
      </div>
    </div>

    <!-- Ações -->
    <div class="flex justify-end gap-3 pt-4">
      <button
        type="button"
        class="px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
        @click="uiStore.closeModal()"
      >
        Cancelar
      </button>
      <button
        type="submit"
        class="px-5 py-2.5 rounded-sm font-semibold text-sm bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all cursor-pointer"
      >
        Salvar
      </button>
    </div>
  </form>
</template>
