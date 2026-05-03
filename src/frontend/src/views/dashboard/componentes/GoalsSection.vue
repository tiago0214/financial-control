<script setup lang="ts">
import { Plane, Home, Car, Calendar } from 'lucide-vue-next';

const goals = [
  { name: "Tokyo Trip", icon: Plane, current: 3400, target: 5000, by: "Aug 2026", tint: "from-primary to-primary-glow" },
  { name: "Move Out Fund", icon: Home, current: 1820, target: 6000, by: "Jan 2027", tint: "from-accent to-warning" },
  { name: "First Car", icon: Car, current: 4200, target: 12000, by: "Jun 2027", tint: "from-primary-glow to-accent" },
];
</script>
<template>
  <section class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
    <div class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="font-display text-xl font-bold">Your goals</h2>
        <p class="text-xs text-muted-foreground">3 active • $9,420 saved</p>
      </div>
      <button class="text-xs font-semibold text-primary hover:underline">View all</button>
    </div>

    <div class="space-y-4">
      <div 
        v-for="g in goals" 
        :key="g.name" 
        class="group rounded-2xl border border-border/50 bg-background/40 p-4 transition-all hover:border-primary/30"
      >
        <div class="flex items-center gap-4">
          <div :class="`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${g.tint} shadow-soft`">
            <component :is="g.icon" class="h-5 w-5 text-primary-foreground" :stroke-width="2.5" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <div class="font-semibold">{{ g.name }}</div>
              <div class="text-sm font-bold tabular-nums">{{ Math.round((g.current / g.target) * 100) }}%</div>
            </div>
            <div class="mt-1 flex items-center justify-between text-xs text-muted-foreground">
              <span>${{ g.current.toLocaleString() }} of ${{ g.target.toLocaleString() }}</span>
              <span class="flex items-center gap-1">
                <Calendar class="h-3 w-3" /> {{ g.by }}
              </span>
            </div>
            <div class="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
              <div
                :class="`h-full rounded-full bg-linear-to-r ${g.tint} transition-all`"
                :style="{ width: `${Math.round((g.current / g.target) * 100)}%` }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>