<script setup lang="ts">
import { ref } from 'vue';
import OverallGoals from './components/OverallGoals.vue';
import SingleGoal from './components/SingleGoal.vue';

const goals = ref([
  {
    id: 1,
    icon: '✈️',
    title: 'Europe Adventure',
    type: 'Medium-term goal',
    duration: '9 months',
    currentAmount: 2400,
    targetAmount: 5000,
    progress: 48,
    monthlyContribution: 300,
    aiInsight: 'On track! You could reach this 2 months early by reducing dining out by $50/month.',
    targetDate: 'September 2026'
  },
  {
    id: 2,
    icon: '🚗',
    title: 'New Car',
    type: 'Long-term goal',
    duration: '2 years',
    currentAmount: 5000,
    targetAmount: 15000,
    progress: 33,
    monthlyContribution: 400,
    aiInsight: 'Slightly behind. Consider increasing your monthly savings by $50.',
    targetDate: 'May 2028'
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