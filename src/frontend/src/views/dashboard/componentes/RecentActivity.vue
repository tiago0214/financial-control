<script setup lang="ts">
import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Coffee, Music, PiggyBank } from 'lucide-vue-next';

const txns = [
  { name: "Supermercado", cat: "Alimentação", when: "Hoje", amount: -85.20, icon: ShoppingBag },
  { name: "Salário", cat: "Rendimento", when: "Ontem", amount: 3200.00, icon: ArrowDownLeft },
  { name: "Cafeteria", cat: "Alimentação", when: "1 Mai", amount: -4.50, icon: Coffee },
  { name: "Spotify", cat: "Música", amount: -10.99, icon: Music, when: "Hoje" },
  { name: "Pagamento", cat: "Rendimento", amount: 1600, icon: ArrowUpRight, when: "Hoje" },
  { name: "Blue Bottle Coffee", cat: "Café", amount: -6.5, icon: Coffee, when: "Ontem" },
];

</script>
<template>
  <section class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
    <div class="mb-5 flex items-center justify-between">
      <h2 class="font-display text-xl font-bold">Atividade recente</h2>
      <button class="text-xs font-semibold text-primary hover:underline">Ver tudo</button>
    </div>
    <div class="space-y-1">
      <div
        v-for="(t, i) in txns"
        :key="i"
        class="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-secondary/50"
      >
        <div :class="`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.amount > 0 ? 'bg-primary/15 text-primary' : 'bg-secondary text-foreground'}`">
          <component :is="t.icon" class="h-4 w-4" />
        </div>
        <div class="min-w-0 flex-1">
          <div class="truncate text-sm font-semibold">{{ t.name }}</div>
          <div class="text-xs text-muted-foreground">{{ t.cat }} • {{ t.when }}</div>
        </div>
        <div :class="`text-sm font-bold tabular-nums ${t.amount > 0 ? 'text-primary' : 'text-foreground'}`">
          {{ t.amount > 0 ? "+" : "" }}R${{ Math.abs(t.amount).toFixed(2) }}
        </div>
      </div>
    </div>
  </section>
</template>