<script setup lang="ts">
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-vue-next';
import StatCard from './components/StatCard.vue';
import FilterBar from './components/FilterBar.vue';
import TransactionTable from './components/TransactionTable.vue';
import CustomModal from '../layout/components/CustomModal.vue';
import { useTransactionsStore } from '../../stores/transactions';
import AddNewTransactionForm from './components/AddNewTransactionForm.vue';

const transactionsStore = useTransactionsStore();
</script>
<template>
  <main class="flex flex-col space-y-6">
  <div class="grid grid-cols-3 gap-4">
    <StatCard 
      label="Depositos este mês"
      :value="transactionsStore.totalIncome"
      tint="bg-primary/10 text-primary"
      :icon="ArrowDownLeft"
    />
    <StatCard 
      label="Gastos este mês"
      :value="transactionsStore.totalExpense"
      tint="bg-destructive/10 text-destructive"
      :icon="ArrowUpRight"
    />
    <StatCard 
      label="Valor Disponível"
      :value="transactionsStore.totalAvailable"
      tint="bg-slate-400/10 text-slate-300"
      :icon="CreditCard"
    />
    </div>

    <FilterBar />
    <TransactionTable />

    <CustomModal modalId="add-transaction">
      <AddNewTransactionForm />
    </CustomModal>
  </main>
</template>