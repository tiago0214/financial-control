<script setup lang="ts">
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-vue-next';
import StatCard from './components/StatCard.vue';
import FilterBar from './components/FilterBar.vue';
import TransactionTable from './components/TransactionTable.vue';
import CustomModal from '../layout/components/CustomModal.vue';

</script>
<template>
  <main class="flex flex-col space-y-6">
  <div class="grid grid-cols-3 gap-4">
    <StatCard 
      label="Depositos este mês"
      value="12800"
      tint="bg-primary/10 text-primary"
      :icon="ArrowDownLeft"
    />
    <StatCard 
      label="Gastos este mês"
      value="700"
      tint="bg-destructive/10 text-destructive"
      :icon="ArrowUpRight"
    />
    <StatCard 
      label="Valor Disponível"
      value="12100"
      tint="bg-slate-400/10 text-slate-300"
      :icon="CreditCard"
    />
    </div>

    <FilterBar />
    <TransactionTable />

    <CustomModal
      modal-id="add-transaction"
    >
      <!-- Formulário de exemplo -->
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Descrição</label>
          <input type="text" class="w-full border border-border rounded-md p-2" placeholder="Ex: Compra no supermercado" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Valor</label>
          <input type="number" class="w-full border border-border rounded-md p-2" placeholder="Ex: 150.00" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Categoria</label>
          <select class="w-full border border-border rounded-md p-2">
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Lazer</option> 
            <option>Outros</option>
          </select>
        </div>
        <div class="flex justify-end">
          <button type="button" class="px-4 py-2 bg-secondary text-sm font-medium rounded-md mr-2">Cancelar</button>
          <button type="submit" class="px-4 py-2 bg-primary text-sm font-medium rounded-md text-primary-foreground">Salvar</button>
        </div>
      </form>
    </CustomModal>
  </main>
</template>