<script setup lang="ts">
import { ArrowDownLeft, ShoppingBag } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { useTransactionsStore } from "../../../stores/transactions";
import { computed } from "vue";

const route = useRouter();
const transactionsStore = useTransactionsStore();

const txns = computed(() => {
  return [...transactionsStore.userTransactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)
    .map((t) => {
      const isCredit = t.status === "credito";
      return {
        name: t.description,
        cat: t.category,
        when: new Date(t.date).toLocaleDateString("pt-BR"),
        amount: isCredit ? Number(t.amount) : -Number(t.amount),
        icon: isCredit ? ArrowDownLeft : ShoppingBag,
      };
    });
});
</script>
<template>
  <section
    class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card"
  >
    <div class="mb-5 flex items-center justify-between">
      <h2 class="font-display text-xl font-bold">Atividade recente</h2>
      <button
        class="text-xs font-semibold text-primary hover:underline cursor-pointer"
        @click="route.push('/app/transactions')"
      >
        Ver tudo
      </button>
    </div>
    <div class="space-y-1">
      <div
        v-for="(t, i) in txns"
        :key="i"
        class="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary/50"
      >
        <div
          :class="[
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
            t.amount > 0
              ? 'bg-primary/10 text-primary'
              : 'bg-destructive/10 text-destructive',
          ]"
        >
          <component :is="t.icon" class="h-4 w-4" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm font-semibold">{{ t.name }}</div>
          <div class="text-xs text-muted-foreground">
            {{ t.cat }} • {{ t.when }}
          </div>
        </div>
        <div
          :class="[
            'text-sm font-bold tabular-nums',
            t.amount > 0 ? 'text-success' : 'text-destructive',
          ]"
        >
          {{ t.amount > 0 ? "+" : "-" }}R$ {{ Math.abs(t.amount).toFixed(2) }}
        </div>
      </div>

      <div
        v-if="txns.length === 0"
        class="text-center py-4 text-sm text-muted-foreground"
      >
        Nenhuma atividade recente.
      </div>
    </div>
  </section>
</template>

