<script setup lang="ts">
import BalanceCard from "./componentes/BalanceCard.vue";
import GoalsSection from "./componentes/GoalsSection.vue";
import RecentActivity from "./componentes/RecentActivity.vue";
import StatCard from "./componentes/StatCard.vue";
import { PiggyBank, ShoppingBag } from "lucide-vue-next";
import { useTransactionsStore } from "../../stores/transactions";
import { computed } from "vue";

const transactions = useTransactionsStore();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
};

const computedIncoming = computed(() => {
  const thisMonth = new Date().getMonth();
  const lastMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;
  let thisMonthTransactionsTotal = 0;
  let lastMonthTransactionsTotal = 0;

  transactions.userTransactions.forEach((ts) => {
    const transactionMonth = new Date(ts.date).getMonth();

    if (transactionMonth == thisMonth && ts.status === "credito") {
      thisMonthTransactionsTotal += Number(ts.amount);
    }

    if (transactionMonth == lastMonth && ts.status === "credito") {
      lastMonthTransactionsTotal += Number(ts.amount);
    }
  });

  const change =
    (thisMonthTransactionsTotal / lastMonthTransactionsTotal) * 100;

  const upOrDown = thisMonthTransactionsTotal > lastMonthTransactionsTotal;
  const changeFormmated = upOrDown
    ? `+${Math.trunc(change)}%`
    : `-${Math.trunc(change)}%`;

  return {
    incoming: formatCurrency(thisMonthTransactionsTotal),
    upOrDown,
    changeFormmated,
  };
});

const computedExpense = computed(() => {
  const thisMonth = new Date().getMonth();
  const lastMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;
  let thisMonthExpensesTotal = 0;
  let lastMonthExpensesTotal = 0;

  transactions.userTransactions.forEach((ts) => {
    const transactionMonth = new Date(ts.date).getMonth();

    if (transactionMonth == thisMonth && ts.status === "debito") {
      thisMonthExpensesTotal += Number(ts.amount);
    }

    if (transactionMonth == lastMonth && ts.status === "debito") {
      lastMonthExpensesTotal += Number(ts.amount);
    }
  });

  const change = (thisMonthExpensesTotal / lastMonthExpensesTotal) * 100;

  const upOrDown = thisMonthExpensesTotal > lastMonthExpensesTotal;
  const changeFormmated = upOrDown
    ? `-${Math.trunc(change)}%`
    : `+${Math.trunc(change)}%`;

  return {
    expenses: formatCurrency(thisMonthExpensesTotal),
    upOrDown: upOrDown,
    changeFormmated,
  };
});
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="col-span-2 space-y-6">
      <div class="grid grid-cols-3 gap-4">
        <BalanceCard />
        <StatCard
          label="Depositos este Mês"
          :value="computedIncoming.incoming"
          :change="computedIncoming.changeFormmated"
          :up="computedIncoming.upOrDown"
          :icon="PiggyBank"
          tint="from-primary to-primary-glow"
        />
        <StatCard
          label="Gasto este mês"
          :value="computedExpense.expenses"
          :change="computedExpense.changeFormmated"
          :up="computedExpense.upOrDown"
          :icon="ShoppingBag"
          tint="from-accent to-warning"
        />
      </div>
      <RecentActivity />
    </div>

    <div>
      <GoalsSection />
    </div>
  </div>
</template>

