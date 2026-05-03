<!-- src/views/goals/components/SingleGoal.vue -->
<script setup lang="ts">
import { Sparkles, Calendar } from 'lucide-vue-next';

defineProps({
    // You can define dynamic props here later!
})
</script>

<template>
    <!-- Card Container -->
    <div class="flex flex-col gap-6 rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
        
        <!-- Header -->
        <header class="flex justify-between items-start">
            <div class="flex gap-3 items-center">
                <div class="text-4xl leading-none">✈️</div>
                <div class="flex flex-col">
                    <span class="text-xl font-bold text-foreground">Europe Adventure</span>
                    <span class="text-sm text-muted-foreground">Medium-term goal</span>
                </div>
            </div>
            <span class="text-primary font-medium rounded-full bg-primary/10 px-3 py-1 text-xs">
                9 months
            </span>
        </header>

        <!-- Progress Section -->
        <div class="flex flex-col gap-2">
            <!-- Amounts -->
            <div class="flex justify-between items-end">
                <span class="text-3xl font-bold text-foreground leading-none font-display">$2,400</span>
                <span class="text-base text-muted-foreground font-display">$5,000</span>
            </div>
            
            <!-- Progress Bar -->
            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                <div class="h-full rounded-full bg-gradient-hero transition-all" style="width: 48%;"></div>
            </div>
            
            <!-- Progress Details -->
            <div class="flex justify-between items-center text-sm mt-1">
                <span class="text-muted-foreground font-display">48% complete</span>
                <span class="text-primary font-semibold font-display">+$300/month</span>
            </div>
        </div>

        <!-- AI Insight Box -->
        <div class="flex flex-col gap-2 rounded-2xl bg-primary/5 p-4">
            <div class="flex items-center gap-2 text-primary font-semibold text-sm">
                <Sparkles class="h-4 w-4" />
                <span class="font-display">AI Insight</span>
            </div>
            <span class="text-sm text-primary/80 leading-relaxed">
                On track! You could reach this 2 months early by reducing dining out by $50/month.
            </span>
        </div>

        <!-- Footer -->
        <footer class="flex justify-between items-center mt-1">
            <div class="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar class="h-4 w-4" />
                <span class="text-sm">Target: September 2026</span>
            </div>
            
            <button class="rounded-xl bg-primary/10 px-4 py-2 font-semibold text-primary transition-all hover:bg-primary/20 cursor-pointer text-xs">
                Adjust Goal
            </button>
        </footer>

    </div>
</template>