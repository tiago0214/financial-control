<script setup lang="ts">
defineProps({

})
</script>
<template>
    <div class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
        <header class="flex justify-between items-start">
            <div class="flex gap-3 items-center">
                <div class="text-4xl">✈️</div>
                <div class="flex flex-col">
                    <span class="text-xl font-bold">Europe Adventure</span>
                    <span class="text-sm text-muted-foreground">Medium-term goal</span>
                </div>
            </div>
            <span class="text-primary font-medium rounded-full bg-primary/10 px-3 py-1 text-xs">
                9 months
            </span>
        </header>

        <div class="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div class="h-full rounded-full bg-linear-to-r bg-gradient-hero transition-all" style="width: 44.7%"></div>
        </div>
    </div>
</template>