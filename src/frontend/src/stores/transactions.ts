import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import {
  addNewTransaction,
  fetchAllTransactions,
  updateTransactionService,
} from "./services/transactions.services";

export interface Transaction {
  id: number;
  userId: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  status: "debito" | "credito";
  paymentMethod: string;
}

export const useTransactionsStore = defineStore("transactions", () => {
  const searchQuery = ref("");

  const selectedTransactionId = ref<number | null>(null);

  // Filter transactions for the current user
  const { data: userTransactions } = useQuery({
    queryKey: computed(() => ["transactions"]),
    queryFn: fetchAllTransactions,
  });

  // Calculate totals
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
    // Basic logic for demonstration: Income - Expense
    return totalIncome.value - totalExpense.value >= 0
      ? totalIncome.value - totalExpense.value
      : 0;
  });

  async function addTransaction(
    transactionData: Omit<Transaction, "id" | "userId">,
  ) {
    const newTransaction: Partial<Transaction> = {
      ...transactionData,
    };

    return addNewTransaction(newTransaction);
  }

  async function updateTransaction(transaction: Partial<Transaction>) {
    return updateTransactionService(transaction);
  }

  function selectTransaction(transcationId: number | null) {
    selectedTransactionId.value = transcationId;
  }

  return {
    // allTransactions,
    userTransactions,
    totalIncome,
    totalExpense,
    totalAvailable,
    searchQuery,
    addTransaction,
    selectTransaction,
    selectedTransactionId,
    updateTransaction,
  };
});
