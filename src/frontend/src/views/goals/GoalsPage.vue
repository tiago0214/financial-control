<script setup lang="ts">
import OverallGoals from './components/OverallGoals.vue';
import SingleGoal from './components/SingleGoal.vue';

</script>
<template>
  <main class="grid grid-cols-1 space-y-6">
      <OverallGoals />
      <div class="grid grid-cols-4">
        <SingleGoal />
      </div>
  </main>
</template>