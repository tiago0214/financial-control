<script setup lang="ts">
import { CreditCard, ArrowUpRight, ArrowDownLeft } from "lucide-vue-next";
import StatCard from "./components/StatCard.vue";
import FilterBar from "./components/FilterBar.vue";
import TransactionTable from "./components/TransactionTable.vue";
import CustomModal from "../layout/components/CustomModal.vue";
import AddNewTransactionForm from "./components/AddNewTransactionForm.vue";
import TopSpending from "./components/TopSpending.vue";
import { useTransactions } from "../../composables/useTransactions";

const transactions = useTransactions();
</script>
<template>
  <main class="flex flex-col space-y-6">
    <div class="grid grid-cols-3 gap-4">
      <StatCard
        label="Depositos Totais"
        :value="transactions.totalIncome.value"
        tint="bg-primary/10 text-primary"
        :icon="ArrowDownLeft"
      />
      <StatCard
        label="Gastos Totais"
        :value="transactions.totalExpense.value"
        tint="bg-accent/10 text-accent"
        :icon="ArrowUpRight"
      />
      <StatCard
        label="Valor Disponível"
        :value="transactions.totalAvailable.value"
        tint="bg-slate-400/10 text-slate-300"
        :icon="CreditCard"
      />
    </div>

    <FilterBar />

    <div class="w-full grid gap-6 grid-cols-3 items-start">
      <TransactionTable class="col-span-2" />
      <TopSpending />
    </div>

    <CustomModal modalId="add-transaction">
      <AddNewTransactionForm />
    </CustomModal>
  </main>
</template>
