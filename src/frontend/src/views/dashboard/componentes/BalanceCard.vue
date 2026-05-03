<script setup lang="ts">
import { TrendingUp } from 'lucide-vue-next';
</script>

<template>
    <div class="relative overflow-hidden rounded-3xl bg-gradient-hero p-6 shadow-elevated md:col-span-1">
        <div class="absolute inset-0 grid-pattern opacity-20" />
        <div class="relative">
        <div class="flex items-center justify-between text-primary-foreground/80">
            <span class="text-xs font-medium uppercase tracking-widest">Total balance</span>
            <TrendingUp class="h-4 w-4" />
        </div>
        <div class="mt-3 font-display text-4xl font-bold text-primary-foreground">
            $12,847.32
        </div>
        <div class="mt-1 text-sm text-primary-foreground/80">+$340.20 this week</div>
        <!-- <div class="mt-5 flex gap-2">
            <button class="flex-1 rounded-xl bg-background/20 backdrop-blur-sm py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-background/30">
            Add money
            </button>
            <button class="flex-1 rounded-xl bg-background/20 backdrop-blur-sm py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-background/30">
            Transfer
            </button>
        </div> -->
        </div>
    </div>
</template>