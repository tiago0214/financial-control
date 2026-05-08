import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from './auth';

export interface Goal {
  id: string;
  userId: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  iconString: string;
  aiInsight?: string;
}

export const useGoalsStore = defineStore('goals', () => {
  const authStore = useAuthStore();
  const selectedGoalId = ref<string | null>(null);
  
  // Load from local storage or default to empty array
  const savedGoals = localStorage.getItem('user_goals');
  const allGoals = ref<Goal[]>(savedGoals ? JSON.parse(savedGoals) : []);

  // Filter goals for the current user
  const userGoals = computed(() => {
    if (!authStore.user?.id) return [];
    return allGoals.value.filter(g => g.userId === authStore.user.id);
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

  function addGoal(goalData: Omit<Goal, 'id' | 'userId' | 'currentAmount'>) {
    if (!authStore.user?.id) throw new Error("Usuário não autenticado");

    const newGoal: Goal = {
      ...goalData,
      id: "GOAL-" + Math.floor(Math.random() * 10000).toString(),
      userId: authStore.user.id,
      currentAmount: 0, // Starts at 0
    };

    allGoals.value.push(newGoal);
    saveToStorage();
  }

  function saveToStorage() {
    localStorage.setItem('user_goals', JSON.stringify(allGoals.value));
  }

  function selectGoal(goalId: string | null) {
    selectedGoalId.value = goalId;
  }

  function updateGoal(updatedData: Partial<Goal>){
    if(!selectedGoalId.value) return;
    const index = allGoals.value.findIndex(g => g.id === selectedGoalId.value)

    if(index != -1){
        allGoals.value[index] = { ...allGoals.value[index], ...updatedData };
        saveToStorage();
    }
  }

  return {
    allGoals,
    userGoals,
    totalTargetAmount,
    totalCurrentAmount,
    overallProgress,
    selectedGoalId,
    addGoal,
    selectGoal,
    updateGoal
  };
});
