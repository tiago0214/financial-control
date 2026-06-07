<script setup lang="ts">
import { Filter } from 'lucide-vue-next';
import { ref } from 'vue';
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

            <!-- <Filter class="h-4 w-4 text-muted-foreground" :stroke-width="2" /> -->
            <!-- <span class="text-muted-foreground text-sm">Filtros</span> -->
         </div>

        <!-- RIGHT -->
         <div class="">
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-linear-to-br from-accent to-warning text-accent-foreground hover:opacity-90 hover:-translate-y-0.5 h-9 px-4 text-xs rounded-full cursor-pointer" @click="handleApplyFilters">Aplicar Filtros</button>
         </div>
    </div>
</template>