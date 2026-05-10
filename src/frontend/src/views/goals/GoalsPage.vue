<script setup lang="ts">
import { computed } from "vue";
import { Plane, Car, Home, Star } from "lucide-vue-next";
import OverallGoals from "./components/OverallGoals.vue";
import SingleGoal from "./components/SingleGoal.vue";
import CustomModal from "../layout/components/CustomModal.vue";
import { useGoalsStore } from "../../stores/goals";
import { useTransactionsStore } from "../../stores/transactions";
import AddNewGoalForm from "./components/AddNewGoalForm.vue";

const goalsStore = useGoalsStore();
const transactionsStore = useTransactionsStore();

const iconMap: Record<string, any> = {
  Plane: Plane,
  Car: Car,
  Home: Home,
  Star: Star,
};

function getDuration(targetDateStr: string) {
  if (!targetDateStr) return "Sem data";
  const targetDate = new Date(targetDateStr);
  const now = new Date();

  const diffTime = targetDate.getTime() - now.getTime();
  if (diffTime <= 0) return "Atrasado";

  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
  if (diffMonths < 12) {
    if (diffMonths === 1) return "1 mês";
    return `${diffMonths} meses`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    return `${years} ano(s)${remainingMonths > 0 ? ` e ${remainingMonths} mes(es)` : ""}`;
  }
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const dateObj = new Date(Number(year), Number(month) - 1, Number(day));
  const m = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(dateObj);
  return `${m.charAt(0).toUpperCase() + m.slice(1)} ${year}`;
}

const goalsList = computed(() => {
  const available = transactionsStore.totalAvailable;
  return goalsStore.userGoals.map((g) => ({
    id: g.id,
    icon: iconMap[g.iconString] || Star,
    tint: "from-primary-glow to-accent",
    title: g.title,
    type: "Meta Financeira",
    duration: getDuration(g.targetDate),
    currentAmount: available,
    targetAmount: g.targetAmount,
    progress: g.targetAmount
      ? Math.min(100, Math.round((available / g.targetAmount) * 100))
      : 0,
    aiInsight: g.aiInsight,
    targetDate: formatDate(g.targetDate),
  }));
});
</script>
<template>
  <main class="grid grid-cols-1 space-y-6">
    <OverallGoals />
    <div
      v-if="goalsList.length > 0"
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
    >
      <SingleGoal v-for="goal in goalsList" :key="goal.id" :goal="goal" />
    </div>
    <div v-else class="text-center py-12 text-muted-foreground">
      Nenhuma meta financeira encontrada. Clique em 'Nova Meta' para adicionar.
    </div>

    <CustomModal modal-id="add-goal">
      <AddNewGoalForm />
    </CustomModal>
  </main>
</template>

