<script setup lang="ts">
import { TrendingUp } from "lucide-vue-next";
import { useTransactionsStore } from "../../../stores/transactions";
import { computed } from "vue";

const transactionStore = useTransactionsStore();

const weeklyIncoming = computed(() => {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday
  startOfWeek.setHours(0, 0, 0, 0);

  let total = 0;
  transactionStore.userTransactions?.forEach((ts) => {
    if (ts.status === "credito") {
      const txDate = new Date(ts.date);
      if (txDate >= startOfWeek) {
        total += Number(ts.amount);
      }
    }
  });

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(total);
});
</script>

<template>
  <div
    class="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary-glow p-6 shadow-elevated md:col-span-1"
  >
    <div class="absolute inset-0 grid-pattern opacity-20" />
    <div class="relative">
      <div class="flex items-center justify-between text-primary-foreground/80">
        <span class="text-xs font-medium uppercase tracking-widest"
          >Saldo total</span
        >
        <div :class="`flex h-9 w-9 items-center justify-center rounded-xl `">
          <TrendingUp class="h-4 w-4" :stroke-width="2.5" />
        </div>
      </div>
      <div class="mt-3 font-display text-4xl font-bold text-primary-foreground">
        R${{ transactionStore.totalAvailable }}
      </div>
      <div class="mt-1 text-xs text-primary-foreground/80">
        +{{ weeklyIncoming }} Esta semana
      </div>
      <!-- <div class="mt-5 flex gap-2"> -->
      <!--   <button -->
      <!--     class="flex-1 rounded-full bg-background/20 backdrop-blur-sm py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-background/30 cursor-pointer" -->
      <!--     @click="uiStore.openModal('Adicionar Entrada', 'main-dashboard')" -->
      <!--   > -->
      <!--     Adicionar Entrada -->
      <!--   </button> -->
      <!--   <button -->
      <!--     class="flex-1 rounded-full bg-background/20 backdrop-blur-sm py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-background/30 cursor-pointer" -->
      <!--     @click="uiStore.openModal('Adicionar Saida', 'main-dashboard')" -->
      <!--   > -->
      <!--     Adicionar Saída -->
      <!--   </button> -->
      <!-- </div> -->
    </div>
    <!---->
    <!-- <CustomModal modalId="main-dashboard"> -->
    <!--   <DashboardForm /> -->
    <!-- </CustomModal> -->
  </div>
</template>
