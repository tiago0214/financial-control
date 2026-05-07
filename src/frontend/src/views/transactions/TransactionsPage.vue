<script setup lang="ts">
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-vue-next';
import StatCard from './components/StatCard.vue';
import FilterBar from './components/FilterBar.vue';
import TransactionTable from './components/TransactionTable.vue';
import CustomModal from '../layout/components/CustomModal.vue';
import { useUiStore } from '../../stores/ui';

const uiStore = useUiStore();
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

    <CustomModal modalId="add-transaction">
      <!-- Formulário de Nova Transação -->
      <form class="space-y-5">
        
        <!-- Descrição -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-semibold text-foreground">Descrição</label>
          <input type="text" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all" placeholder="Ex: Compra no supermercado" />
        </div>

        <!-- Valor e Data -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-foreground">Valor (R$)</label>
            <input type="number" step="0.01" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all" placeholder="0.00" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-foreground">Data</label>
            <input type="date" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all text-muted-foreground" />
          </div>
        </div>

        <!-- Categoria e Status -->
        <div class="grid grid-cols-2 gap-4">
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-foreground">Categoria</label>
            <select class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer">
              <option>Alimentação</option>
              <option>Transporte</option>
              <option>Moradia</option>
              <option>Assinaturas</option>
              <option>Saúde</option>
              <option>Compras</option>
              <option>Receita</option>
              <option>Outros</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-foreground">Status</label>
            <select class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer">
              <option value="debito">Débito (-)</option>
              <option value="credito">Crédito (+)</option>
            </select>
          </div>
        </div>

        <!-- Método de Pagamento -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-semibold text-foreground">Método de Pagamento</label>
          <select class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer">
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
            <option>Pix</option>
            <option>Transferência</option>
            <option>Boleto</option>
            <option>Dinheiro</option>
          </select>
        </div>

        <!-- Ações -->
        <div class="flex justify-end gap-3 pt-4 border-t border-border/50">
          <button type="button" @click="uiStore.closeModal()" class="px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-muted text-muted-foreground transition-colors cursor-pointer">Cancelar</button>
          <button type="submit" class="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all cursor-pointer">Adicionar Transação</button>
        </div>
      </form>
    </CustomModal>
  </main>
</template>