import { defineStore } from "pinia";
import { ref } from "vue";

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
