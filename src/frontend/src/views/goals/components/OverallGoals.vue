<script setup lang="ts">
import { computed } from "vue";
import { useGoals } from "../../../composables/useGoals";
import { useTransactions } from "../../../composables/useTransactions";

const goalsComposable = useGoals();
const transactions = useTransactions();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
};

const overallProgress = computed(() => {
  if (goalsComposable.totalTargetAmount.value === 0) return 0;
  return Math.min(
    100,
    (transactions.totalAvailable.value /
      goalsComposable.totalTargetAmount.value) *
      100,
  );
});

const progressColor = computed(() => {
  const p = overallProgress.value;
  if (p < 30) return "from-accent to-warning";
  if (p < 70) return "from-accent to-primary-glow";
  return "from-primary to-primary-glow";
});
</script>
<template>
  <section class="rounded-3xl bg-card border border-border p-6 mt-4">
    <header class="flex justify-between items-center mb-4">
      <div>
        <div class="text-3xl font-bold font-display">
          {{ formatCurrency(transactions.totalAvailable.value) }}
        </div>
        <div class="text-muted-foreground text-xs">
          de {{ formatCurrency(goalsComposable.totalTargetAmount.value) }}
        </div>
      </div>

      <div>
        <div class="text-3xl font-bold font-display">
          <span class="gradient-text">{{ overallProgress.toFixed(1) }}%</span>
        </div>
        <div class="text-muted-foreground text-xs">Progresso Geral</div>
      </div>
    </header>
    <div class="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
      <div
        class="h-full rounded-full bg-linear-to-r transition-all"
        :class="progressColor"
        :style="{ width: overallProgress + '%' }"
      ></div>
    </div>
  </section>
</template>
