<script setup lang="ts">
defineProps({
    label: String,
    value: String,
    tint: String,
    icon: Function,
})

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
}
</script>

<template>
    <div class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card flex">
        <div :class="`${tint} flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft`">
            <component :is="icon" class="h-5 w-5" :stroke-width="2" />
        </div>

        <div class="flex justify-center flex-col ml-4">
            <span class="text-xs font-medium text-muted-foreground">{{label}}</span>
            <div class="font-display text-3xl font-bold">{{formatCurrency(Number(value))}}</div>
        </div>
  </div>
</template>