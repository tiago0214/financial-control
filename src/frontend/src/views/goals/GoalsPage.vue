<script setup lang="ts">
import { ref } from 'vue';
import { Plane, Car } from 'lucide-vue-next';
import OverallGoals from './components/OverallGoals.vue';
import SingleGoal from './components/SingleGoal.vue';

const goals = ref([
  {
    id: 1,
    icon: Plane,
    tint: 'from-primary to-primary-glow',
    title: 'Aventura na Europa',
    type: 'Meta de médio prazo',
    duration: '9 meses',
    currentAmount: 2400,
    targetAmount: 5000,
    progress: 48,
    monthlyContribution: 300,
    aiInsight: 'No caminho certo! Você pode alcançar isso 2 meses antes, reduzindo os gastos com alimentação fora em R$50/mês.',
    targetDate: 'Setembro 2026'
  },
  {
    id: 2,
    icon: Car,
    tint: 'from-primary-glow to-accent',
    title: 'Carro Novo',
    type: 'Meta de longo prazo',
    duration: '2 anos',
    currentAmount: 5000,
    targetAmount: 15000,
    progress: 33,
    monthlyContribution: 400,
    aiInsight: 'Um pouco atrasado. Considere aumentar sua economia mensal em R$50.',
    targetDate: 'Maio 2028'
  }
]);
</script>
<template>
  <main class="grid grid-cols-1 space-y-6">
      <OverallGoals />
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <SingleGoal v-for="goal in goals" :key="goal.id" :goal="goal" />
      </div>
  </main>
</template>