<script setup lang="ts">
import BalanceCard from './componentes/BalanceCard.vue';
import GoalsSection from './componentes/GoalsSection.vue';
import RecentActivity from './componentes/RecentActivity.vue';
import StatCard from './componentes/StatCard.vue';
import { PiggyBank, ShoppingBag } from 'lucide-vue-next';

</script>

<template>
    <div class="grid grid-cols-3 gap-6">
        <div class="col-span-2 space-y-6">
            <div class="grid grid-cols-3 gap-4">
                <BalanceCard />
                <StatCard 
                    label="This month saved"
                    value="$1,240"
                    change="+18%"
                    up
                    :icon=PiggyBank
                    tint="from-primary to-primary-glow"
                />
                <StatCard 
                    label="Spent this month"
                    value="$1,860"
                    change="-12%"
                    up
                    :icon=ShoppingBag
                    tint="from-accent to-warning"
                />
            </div>
            <RecentActivity />
        </div>

        <div>
            <GoalsSection />
        </div>
    </div>
</template>