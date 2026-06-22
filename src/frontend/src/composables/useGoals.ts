import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { fetchAllGoals } from "../services/goals.services";

export function useGoals() {
  const { data: userGoals } = useQuery({
    queryKey: computed(() => ["goals"]),
    queryFn: fetchAllGoals,
    initialData: [],
  });

  const totalTargetAmount = computed(() => {
    return userGoals.value.reduce((sum, g) => sum + g.targetAmount, 0);
  });

  const totalCurrentAmount = computed(() => {
    return userGoals.value.reduce((sum, g) => sum + g.currentAmount, 0);
  });

  const overallProgress = computed(() => {
    if (totalTargetAmount.value === 0) return 0;
    return (totalCurrentAmount.value / totalTargetAmount.value) * 100;
  });

  return { userGoals, totalTargetAmount, totalCurrentAmount, overallProgress };
}
