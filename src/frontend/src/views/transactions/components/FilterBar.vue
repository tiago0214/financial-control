<script setup lang="ts">
import { Filter } from 'lucide-vue-next';
</script>
<template>
    <div class="shadow-card rounded-3xl border border-border/50 bg-gradient-card p-6 flex items-center justify-between">

        <!-- LEFT -->
         <div class="flex items-center gap-2">
             
            <Filter class="h-4 w-4 text-muted-foreground" :stroke-width="2" />
            <span class="text-muted-foreground text-sm">Filtros</span>

         </div>

        <!-- RIGHT -->
         <div class="">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-linear-to-br from-accent to-warning text-accent-foreground hover:opacity-90 hover:-translate-y-0.5 h-9 px-4 text-xs rounded-full cursor-pointer">Adicionar Transação</button>
         </div>
    </div>
</template>