<template>
  <main
    class="shadow-card rounded-3xl border border-border/50 bg-gradient-card overflow-hidden"
  >
    <header class="text-lg font-semibold mb-6 pt-6 pl-6">
      Gastos por Categoria
    </header>

    <div class="w-full grid gap-4 pb-6 px-6">
      <SpendingCard
        v-for="(spending, index) in topSpending"
        :key="index"
        :spending="{ category: spending[0], amount: spending[1] }"
        :total-expense="transactionsStore.totalExpense"
        :index="index"
      />
      <p
        v-if="topSpending.length === 0"
        class="text-center py-12 text-sm text-muted-foreground"
      >
        Nenhum gasto encontrado.
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useTransactionsStore } from "../../../stores/transactions";
import { computed } from "vue";
import SpendingCard from "./SpendingCard.vue";

const transactionsStore = useTransactionsStore();
const topSpending = computed(() => {
  const expenses = transactionsStore.userTransactions?.filter(
    (t) => t.status === "debito",
  );
  const categoryTotals: Record<string, number> = {};

  expenses?.forEach((expense) => {
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += Number(expense.amount);
  });

  return Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
});
</script>
