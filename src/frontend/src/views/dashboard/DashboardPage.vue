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
  const currentDate = new Date();
  const thisMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const lastMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;
  const lastMonthYear = thisMonth === 0 ? currentYear - 1 : currentYear;
  
  let thisMonthTransactionsTotal = 0;
  let lastMonthTransactionsTotal = 0;

  transactions.userTransactions.forEach((ts) => {
    const transactionDate = new Date(ts.date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();

    if (transactionMonth === thisMonth && transactionYear === currentYear && ts.status === "credito") {
      thisMonthTransactionsTotal += Number(ts.amount);
    }

    if (transactionMonth === lastMonth && transactionYear === lastMonthYear && ts.status === "credito") {
      lastMonthTransactionsTotal += Number(ts.amount);
    }
  });

  let change = 0;
  if (lastMonthTransactionsTotal > 0) {
    change = ((thisMonthTransactionsTotal - lastMonthTransactionsTotal) / lastMonthTransactionsTotal) * 100;
  } else if (thisMonthTransactionsTotal > 0) {
    change = 100;
  }

  const upOrDown = thisMonthTransactionsTotal >= lastMonthTransactionsTotal;
  const changeFormmated = `${change >= 0 ? '+' : '-'}${Math.abs(Math.trunc(change))}%`;

  return {
    incoming: formatCurrency(thisMonthTransactionsTotal),
    upOrDown,
    changeFormmated,
  };
});

const computedExpense = computed(() => {
  const currentDate = new Date();
  const thisMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const lastMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;
  const lastMonthYear = thisMonth === 0 ? currentYear - 1 : currentYear;
  
  let thisMonthExpensesTotal = 0;
  let lastMonthExpensesTotal = 0;

  transactions.userTransactions.forEach((ts) => {
    const transactionDate = new Date(ts.date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();

    if (transactionMonth === thisMonth && transactionYear === currentYear && ts.status === "debito") {
      thisMonthExpensesTotal += Number(ts.amount);
    }

    if (transactionMonth === lastMonth && transactionYear === lastMonthYear && ts.status === "debito") {
      lastMonthExpensesTotal += Number(ts.amount);
    }
  });

  let change = 0;
  if (lastMonthExpensesTotal > 0) {
    change = ((thisMonthExpensesTotal - lastMonthExpensesTotal) / lastMonthExpensesTotal) * 100;
  } else if (thisMonthExpensesTotal > 0) {
    change = 100;
  }

  const changeFormmated = `${change >= 0 ? '+' : '-'}${Math.abs(Math.trunc(change))}%`;

  return {
    expenses: formatCurrency(thisMonthExpensesTotal),
    upOrDown: thisMonthExpensesTotal <= lastMonthExpensesTotal,
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

