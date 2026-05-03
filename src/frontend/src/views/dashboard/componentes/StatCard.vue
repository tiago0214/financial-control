<script setup lang="ts">
import { ArrowUpRight, ArrowDownRight } from 'lucide-vue-next';

defineProps({
    label: String,
    value: String,
    change: String,
    up: Boolean,
    icon: Object,
    tint: String
})
</script>

<template>
    <div class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
    <div class="flex items-center justify-between">
      <span class="text-xs font-medium uppercase tracking-widest text-muted-foreground">{{label}}</span>
      <div :class="`flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br ${tint}`">
        <component :is="icon" class="h-4 w-4 text-primary-foreground" :stroke-width="2.5" />
      </div>
    </div>
    <div class="mt-3 font-display text-3xl font-bold">{{value}}</div>
    <div :class="`mt-1 flex items-center gap-1 text-xs ${up ? 'text-primary' : 'text-destructive'}`">
      <ArrowUpRight v-if="up" class="h-3 w-3" />
      <ArrowDownRight v-else class="h-3 w-3" />
      {{change}} vs last month
    </div>
  </div>
</template>