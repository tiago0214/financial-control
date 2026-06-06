import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from './auth';

export interface Transaction {
  id: string;
  userId: string;
  description: string;
  amount: number;
  date: string;
  category: string;
  status: 'debito' | 'credito';
  paymentMethod: string;
}

export const useTransactionsStore = defineStore('transactions', () => {
  const authStore = useAuthStore();
  
  // Load from local storage or default to empty array
  const savedTransactions = localStorage.getItem('user_transactions');
  const allTransactions = ref<Transaction[]>(savedTransactions ? JSON.parse(savedTransactions) : []);

  const selectedTransactionId = ref<string | null>(null)

  // Filter transactions for the current user
  const userTransactions = computed(() => {
    if (!authStore.user?.id) return [];
    return allTransactions.value.filter(t => t.userId === authStore.user.id);
  });

  // Calculate totals
  const totalIncome = computed(() => {
    return userTransactions.value
      .filter(t => t.status === 'credito')
      .reduce((sum, t) => sum + t.amount, 0);
  });

  const totalExpense = computed(() => {
    return userTransactions.value
      .filter(t => t.status === 'debito')
      .reduce((sum, t) => sum + t.amount, 0);
  });

  const totalAvailable = computed(() => {
    // Basic logic for demonstration: Income - Expense
    return totalIncome.value - totalExpense.value >= 0 ? totalIncome.value - totalExpense.value : 0;
  });

  function addTransaction(transactionData: Omit<Transaction, 'id' | 'userId'>) {
    if (!authStore.user?.id) throw new Error("Usuário não autenticado");

    const newTransaction: Transaction = {
      ...transactionData,
      id: "TX-" + Math.floor(Math.random() * 10000).toString(),
      userId: authStore.user.id
    };

    allTransactions.value.push(newTransaction);
    saveToStorage();
  }

  function saveToStorage() {
    localStorage.setItem('user_transactions', JSON.stringify(allTransactions.value));
  }

  function updateTransaction(transaction: Partial<Transaction>){
    if(!selectedTransactionId.value) return
    const index = allTransactions.value.findIndex((t) => t.id == selectedTransactionId.value)

    if(index !== -1){
      allTransactions.value[index] = {...allTransactions.value[index], ...transaction}

      saveToStorage()
    }
  }

  function selectTransaction(transcationId: string | null){
    selectedTransactionId.value = transcationId
  }

  return {
    allTransactions,
    userTransactions,
    totalIncome,
    totalExpense,
    totalAvailable,
    addTransaction,
    selectTransaction,
    selectedTransactionId,
    updateTransaction
  };
});
