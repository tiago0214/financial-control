// composables/useTransactions.ts
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { fetchAllTransactions } from "../services/transactions.services";

export function useTransactions() {
  const { data: userTransactions, refetch: refetchTransactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchAllTransactions,
    initialData: [],
  });

  const totalIncome = computed(() => {
    return (
      userTransactions.value
        ?.filter((t) => t.status === "credito")
        .reduce((sum, t) => sum + Number(t.amount), 0) || 0
    );
  });

  const totalExpense = computed(() => {
    return (
      userTransactions.value
        ?.filter((t) => t.status === "debito")
        .reduce((sum, t) => sum + Number(t.amount), 0) || 0
    );
  });

  const totalAvailable = computed(() => {
    const income = totalIncome.value;
    const expense = totalExpense.value;
    return income - expense >= 0 ? income - expense : 0;
  });

  return {
    userTransactions,
    totalIncome,
    totalExpense,
    totalAvailable,
    refetchTransactions,
  };
}
