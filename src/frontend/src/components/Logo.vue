<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
</script>

<template>
    <RouterLink to="/" class='flex items-center gap-2'>
        <div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
        <Sparkles class="h-5 w-5 text-primary-foreground" stroke-width="2.5" />
        </div>
        <span class="font-display text-xl font-bold tracking-tight">Midas Helper</span>
    </RouterLink>
</template>