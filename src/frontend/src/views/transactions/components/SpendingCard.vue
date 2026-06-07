<template>
  <div class="flex flex-col space-y-1">
    <div class="flex justify-between items-center font-medium">
      <span class="text-foreground font-semibold">{{ spending.category }}</span>
      <span class="text-foreground font-bold">${{ spending.amount.toFixed(0) }}</span>
    </div>
    <div class="h-2 w-full bg-secondary/60 rounded-full overflow-hidden mt-1">
      <div class="h-full rounded-full" :class="barColor" :style="{ width: `${percentage}%` }"></div>
    </div>
    <p class="text-xs text-muted-foreground mt-1">
      {{ percentage.toFixed(0) }}% do valor total
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  spending: { category: string; amount: number };
  totalExpense: number;
  index: number;
}>();

const percentage = computed(() => {
  if (!props.totalExpense) return 0;
  return (props.spending.amount / props.totalExpense) * 100;
});

const barColor = computed(() => {
  const colors = [
    'bg-orange-500', 
    'bg-purple-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-green-500',
  ];
  return colors[props.index % colors.length];
});
</script>