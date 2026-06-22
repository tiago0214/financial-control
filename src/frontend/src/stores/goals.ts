import { defineStore } from "pinia";
import { ref } from "vue";

export const useGoalsStore = defineStore("goals", () => {
  const selectedGoalId = ref<number | null>(null);

  function selectGoal(goalId: number | null) {
    selectedGoalId.value = goalId;
  }

  return {
    selectedGoalId,
    selectGoal,
  };
});
