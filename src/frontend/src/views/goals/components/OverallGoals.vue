<script setup lang="ts"></script>
<template>
    <section class="rounded-3xl bg-card border border-border p-6">
        <header class="flex justify-between items-center mb-4">
            <div>
                <div class="text-3xl font-bold font-display">R$1,234.56</div>
                <div class="text-muted-foreground text-xs">de R$5,000.00</div>
            </div>

            <div>
                <div class="text-3xl font-bold font-display"><span class="gradient-text">24.7%</span></div>
                <div class="text-muted-foreground text-xs">Progresso Geral</div>
            </div>
        </header>
        <div class="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
            <div class="h-full rounded-full bg-linear-to-r bg-gradient-hero transition-all" style="width: 44.7%"></div>
        </div>
    </section>
</template>