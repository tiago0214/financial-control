import { defineStore } from "pinia";
import { ref } from "vue";

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

  function selectTransaction(transcationId: number | null) {
    selectedTransactionId.value = transcationId;
  }

  return {
    searchQuery,
    selectTransaction,
    selectedTransactionId,
  };
});
