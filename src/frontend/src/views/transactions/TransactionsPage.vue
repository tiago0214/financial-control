<script setup lang="ts">
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-vue-next';
import StatCard from './components/StatCard.vue';
import FilterBar from './components/FilterBar.vue';

</script>
<template>
  <main class="flex flex-col space-y-6">
  <div class="grid grid-cols-3 gap-4">
    <StatCard 
      label="Depositos este mês"
      value="12800"
      tint="bg-primary/10 text-primary"
      :icon="ArrowDownLeft"
    />
    <StatCard 
      label="Gastos este mês"
      value="700"
      tint="bg-destructive/10 text-destructive"
      :icon="ArrowUpRight"
    />
    <StatCard 
      label="Valor Disponível"
      value="12100"
      tint="bg-slate-400/10 text-slate-300"
      :icon="CreditCard"
    />
    </div>

    <FilterBar />
  </main>
</template>