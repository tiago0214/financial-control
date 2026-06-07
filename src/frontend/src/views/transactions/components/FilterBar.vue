<script setup lang="ts">
import { ArrowUpDown, Filter } from 'lucide-vue-next';
import { useTransactionsStore } from '../../../stores/transactions';

const transacationStore = useTransactionsStore();

function handleApplyFilters() {
   alert("Não implementado!")
}
</script>
<template>
    <div class="shadow-card rounded-3xl border border-border/50 bg-gradient-card p-4 flex items-center gap-4">

        <!-- LEFT -->
         <div class="flex-1 items-center gap-2 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>

            <input
               v-model="transacationStore.searchQuery"
               required
               type="text"
               class="w-full outline-0 border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all pl-12 pr-4"
               placeholder="Pesquisar transações..."
            />
         </div>

        <!-- RIGHT -->
         <div class="flex items-center gap-2">
            <button class="flex items-center gap-2 cursor-pointer rounded-sm px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors border hover:bg-muted" @click="handleApplyFilters">
               <Filter class="h-4 w-4 text-muted-foreground" :stroke-width="2" />
               <span class="text-foreground text-sm">Filtros</span>
            </button>

            <button class="flex items-center gap-2 cursor-pointer rounded-sm px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors border hover:bg-muted" @click="handleApplyFilters">
               <ArrowUpDown class="h-5 w-5 text-muted-foreground" :stroke-width="2" />
               <span class="text-foreground text-sm">Ordenar</span>
            </button>
         </div>
    </div>
</template>