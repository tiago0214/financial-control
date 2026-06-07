<!-- src/views/goals/components/SingleGoal.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import { Sparkles, Calendar } from 'lucide-vue-next';
import type { PropType } from 'vue';
import { useGoalsStore } from '../../../stores/goals';
import { useUiStore } from '../../../stores/ui';

const goalsStore = useGoalsStore()
const uiStore = useUiStore()

const props = defineProps({
    goal: {
        type: Object as PropType<{
            id:string;
            icon: any;
            tint: string;
            title: string;
            type: string;
            duration: string;
            currentAmount: number;
            targetAmount: number;
            progress: number;
            aiInsight?: string;
            targetDate: string;
        }>,
        required: true
    }
})

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
}

const progressColor = computed(() => {
    const p = props.goal.progress;
    if (p < 30) return 'from-accent to-warning';
    if (p < 70) return 'from-accent to-primary-glow';
    return 'from-primary to-primary-glow';
});

function handleEdit() {
  goalsStore.selectGoal(props.goal.id);
  uiStore.openModal('Editar Meta', 'add-goal'); // Assuming your UI store has an openModal function
}
</script>

<template>
    <!-- Card Container -->
    <div class="flex flex-col justify-between gap-6 rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">

        <!-- Header -->
        <header class="flex justify-between items-start">
            <div class="flex gap-4 items-center">
                <div :class="['flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br shadow-soft', progressColor]">
                    <component :is="goal.icon" class="h-5 w-5 text-primary-foreground" :stroke-width="2.5" />
                </div>
                <div class="flex flex-col">
                    <span class="text-xl font-bold text-foreground">{{ goal.title }}</span>
                    <span class="text-sm text-muted-foreground">{{ goal.type }}</span>
                </div>
            </div>
            <span class="text-primary font-medium rounded-full bg-primary/10 px-3 py-1 text-xs">
                {{ goal.duration }}
            </span>
        </header>

        <!-- Progress Section -->
        <div class="flex flex-col gap-2">
            <!-- Amounts -->
            <div class="flex justify-between items-end">
                <span class="text-3xl font-bold text-foreground leading-none font-display">{{ formatCurrency(goal.targetAmount) }}</span>
                            <!-- Progress Details -->
                <div class="flex justify-between items-center text-sm mt-1">
                    <span class="text-muted-foreground font-display">{{ goal.progress }}% completo</span>
                </div>
            </div>
            
            <!-- Progress Bar -->
            <div class="h-2 overflow-hidden rounded-full bg-secondary">
                <div class="h-full rounded-full bg-linear-to-r transition-all" :class="progressColor" :style="{ width: goal.progress + '%' }"></div>
            </div>
        </div>

        <!-- AI Insight Box -->
        <div v-if="goal.aiInsight" class="flex flex-col gap-2 rounded-2xl bg-primary/5 p-4">
            <div class="flex items-center gap-2 text-primary font-semibold text-sm">
                <Sparkles class="h-4 w-4" />
                <span class="font-display">Insight da IA</span>
            </div>
            <span class="text-sm text-primary/80 leading-relaxed">
                {{ goal.aiInsight }}
            </span>
        </div>

        <!-- Footer -->
        <footer class="flex justify-between items-center mt-1">
            <div class="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar class="h-4 w-4" />
                <span class="text-sm">Meta: {{ goal.targetDate }}</span>
            </div>
            <button class="rounded-sm bg-gradient-primary px-4 py-2 font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow cursor-pointer text-xs" @click="handleEdit">
                Ajustar Meta
            </button>
        </footer>
    </div>
</template>