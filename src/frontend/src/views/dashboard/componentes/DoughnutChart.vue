<template>
    <section class="flex flex-col rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card min-h-[34rem]">
        <header class="text-lg font-semibold mb-6">Gastos por Categoria</header>
        
        <div v-if="topSpending.length > 0" class="flex flex-col flex-1">
            <div class="flex-1 flex items-center justify-center min-h-0 relative pb-6 h-64">
                <Chart 
                    type="doughnut" 
                    :data="chartData" 
                    :options="chartOptions" 
                />
            </div>
            
            <div class="flex flex-col space-y-3 mt-4">
                <div v-for="(item, index) in topSpending" :key="index" class="flex justify-between items-center text-sm">
                    <div class="flex items-center gap-3">
                        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: chartColors[index % chartColors.length] }"></div>
                        <span class="text-muted-foreground">{{ item.category }}</span>
                    </div>
                    <span class="font-bold text-foreground">${{ item.amount.toFixed(0) }}</span>
                </div>
            </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center flex-1 h-full text-center text-muted-foreground gap-4">
            <div class="h-16 w-16 rounded-full bg-secondary/50 flex items-center justify-center">
                <ChartPie class="text-2xl text-muted-foreground/50"/>
            </div>
            <p>Nenhuma despesa encontrada.</p>
            <span class="text-sm">Comece adicionando saídas para ver seu gráfico.</span>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue';
import Chart from 'primevue/chart';
import { useTransactionsStore } from '../../../stores/transactions';
import { ChartPie } from 'lucide-vue-next';

const transactions = useTransactionsStore();

const chartColors = [
    '#fb923c', // orange (lighter tone)
    '#f472b6', // pink (lighter tone)
    '#c084fc', // purple (lighter tone)
    '#facc15', // yellow (lighter tone)
    '#60a5fa', // blue (lighter tone)
    '#4ade80', // green (lighter tone)
];

const topSpending = computed(() => {
    const expenses = transactions.userTransactions.filter(t => t.status === 'debito');
    const categoryTotals: Record<string, number> = {};
    
    expenses.forEach(expense => {
        if (!categoryTotals[expense.category]) {
        categoryTotals[expense.category] = 0;
        }
        categoryTotals[expense.category] += expense.amount;
    });
    
    return Object.entries(categoryTotals)
        .map(([category, amount]) => ({ category, amount }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 6);
});

const chartData = ref({});
const chartOptions = ref({});

const setChartData = () => {
    return {
        labels: topSpending.value.map(item => item.category),
        datasets: [
            {
                data: topSpending.value.map(item => item.amount),
                backgroundColor: chartColors.slice(0, topSpending.value.length),
                hoverBackgroundColor: chartColors.slice(0, topSpending.value.length),
                borderWidth: 8,
                borderSkipped: true,
                borderColor: 'transparent', // Match the card background for a seamless look
            }
        ]
    };
};

const setChartOptions = () => {
    return {
        plugins: {
            legend: {
                display: false // Using custom legend below the chart
            }
        },
        // maintainAspectRatio: false,
        // aspectRatio: 1,
        // cutout: '60%', // Creates the thin doughnut look
    };
}

watchEffect(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>