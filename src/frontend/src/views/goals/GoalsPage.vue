<script setup lang="ts">
import { ref } from 'vue';
import { Plane, Car } from 'lucide-vue-next';
import OverallGoals from './components/OverallGoals.vue';
import SingleGoal from './components/SingleGoal.vue';
import CustomModal from '../layout/components/CustomModal.vue';
import { useUiStore } from '../../stores/ui';

const uiStore = useUiStore();

const goals = ref([
  {
    id: 1,
    icon: Plane,
    tint: 'from-primary to-primary-glow',
    title: 'Aventura na Europa',
    type: 'Meta de médio prazo',
    duration: '9 meses',
    currentAmount: 2400,
    targetAmount: 5000,
    progress: 48,
    aiInsight: 'No caminho certo! Você pode alcançar isso 2 meses antes, reduzindo os gastos com alimentação fora em R$50/mês.',
    targetDate: 'Setembro 2026'
  },
  {
    id: 2,
    icon: Car,
    tint: 'from-primary-glow to-accent',
    title: 'Carro Novo',
    type: 'Meta de longo prazo',
    duration: '2 anos',
    currentAmount: 5000,
    targetAmount: 15000,
    progress: 33,
    aiInsight: 'Um pouco atrasado. Considere aumentar sua economia mensal em R$50.',
    targetDate: 'Maio 2028'
  }
]);
</script>
<template>
  <main class="grid grid-cols-1 space-y-6">
      <OverallGoals />
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <SingleGoal v-for="goal in goals" :key="goal.id" :goal="goal" />
      </div>

      <CustomModal 
        modal-id="add-goal"
      >
        <!-- Formulário de Nova Meta -->
        <form class="space-y-5">
          
          <!-- Título da Meta -->
          <div class="flex flex-col gap-1.5">
            <label class="text-sm font-semibold text-foreground">Título da Meta</label>
            <input type="text" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all" placeholder="Ex: Viagem para Europa" />
          </div>

          <!-- Valor Alvo e Data Alvo -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-foreground">Valor Alvo (R$)</label>
              <input type="number" step="0.01" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all" placeholder="0.00" />
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-foreground">Data Alvo</label>
              <input type="date" class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all" />
            </div>
          </div>

          <!-- Ícone -->
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-semibold text-foreground">Ícone</label>
              <select class="w-full outline-0 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-2.5 text-sm transition-all cursor-pointer">
                <option value="Plane">✈️ Avião</option>
                <option value="Car">🚗 Carro</option>
                <option value="Home">🏠 Casa</option>
                <option value="Star">✨ Estrela</option>
              </select>
            </div>
            
          </div>

          <!-- Ações -->
          <div class="flex justify-end gap-3 pt-4 ">
            <button type="button" class="px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-muted text-muted-foreground transition-colors cursor-pointer" @click="uiStore.closeModal()">Cancelar</button>
            <button type="submit" class="px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all cursor-pointer">Adicionar Meta</button>
          </div>
        </form>
      </CustomModal>
  </main>
</template>