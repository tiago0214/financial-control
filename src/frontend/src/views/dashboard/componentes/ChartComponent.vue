<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Chart from 'primevue/chart';
import { useTransactionsStore } from '../../../stores/transactions';

const chartData = ref();
const chartOptions = ref();
const transactions = useTransactionsStore();

const setChartData = () => {
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const monthlyData: Record<string, { income: number, expense: number, dateValue: number }> = {};
    
    transactions.userTransactions.forEach((ts) => {
        const transactionDate = new Date(ts.date);
        const month = transactionDate.getMonth();
        const year = transactionDate.getFullYear();
        const key = `${monthNames[month]} ${year}`;
        const dateValue = year * 100 + month; // Used for sorting chronologically
        
        if (!monthlyData[key]) {
            monthlyData[key] = { income: 0, expense: 0, dateValue };
        }
        
        if (ts.status === 'credito') {
            monthlyData[key].income += Number(ts.amount);
        } else if (ts.status === 'debito') {
            monthlyData[key].expense += Number(ts.amount);
        }
    });

    // Sort by dateValue to ensure chronological order
    const sortedKeys = Object.keys(monthlyData).sort((a, b) => monthlyData[a].dateValue - monthlyData[b].dateValue);
    
    const labels = sortedKeys;
    const incomingData = sortedKeys.map(k => monthlyData[k].income);
    const expenseData = sortedKeys.map(k => monthlyData[k].expense);

    // Fallback for empty state
    if (labels.length === 0) {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        labels.push(`${monthNames[currentMonth]} ${currentYear}`);
        incomingData.push(0);
        expenseData.push(0);
    }

    return {
        labels: labels,
        datasets: [
            {
                label: 'Entradas',
                data: incomingData,
                backgroundColor: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return 'hsl(156, 84%, 55%)';
                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, 'hsl(156, 84%, 55%)'); // --color-primary
                    gradient.addColorStop(1, 'hsl(162, 90%, 65%)'); // --color-primary-glow
                    return gradient;
                },
                borderRadius: 4
            },
            {
                label: 'Saídas',
                data: expenseData,
                backgroundColor: 'hsl(14, 95%, 65%)', // --color-accent
                borderRadius: 4
            },
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    // const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    usePointStyle: true,
                },
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    };
}

watchEffect(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>

<template>
    <section class="rounded-3xl border border-border/50 bg-gradient-card p-6 shadow-card">
        <div class="card">
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-120" />
        </div>
    </section>
</template>