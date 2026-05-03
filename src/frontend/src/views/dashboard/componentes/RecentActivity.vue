<script setup lang="ts">
import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Coffee, Music, PiggyBank } from 'lucide-vue-next';

const txns = [
  { name: "Grocery Store", cat: "Food", when: "Today", amount: -85.20, icon: ShoppingBag },
  { name: "Salary", cat: "Income", when: "Yesterday", amount: 3200.00, icon: ArrowDownLeft },
  { name: "Coffee Shop", cat: "Food", when: "May 1", amount: -4.50, icon: Coffee },
  { name: "Spotify", cat: "Music", amount: -10.99, icon: Music, when: "Today" },
  { name: "Paycheck", cat: "Income", amount: 1600, icon: ArrowUpRight, when: "Today" },
  { name: "Blue Bottle Coffee", cat: "Coffee", amount: -6.5, icon: Coffee, when: "Yesterday" },
  { name: "Auto-save → Tokyo", cat: "Savings", amount: -85, icon: PiggyBank, when: "Yesterday" },
  { name: "Uniqlo", cat: "Shopping", amount: -42.3, icon: ShoppingBag, when: "Apr 22" },
];

</script>
<template>
  <section class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
    <div class="mb-5 flex items-center justify-between">
      <h2 class="font-display text-xl font-bold">Recent activity</h2>
      <button class="text-xs font-semibold text-primary hover:underline">See all</button>
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
          {{ t.amount > 0 ? "+" : "" }}${{ Math.abs(t.amount).toFixed(2) }}
        </div>
      </div>
    </div>
  </section>
</template>