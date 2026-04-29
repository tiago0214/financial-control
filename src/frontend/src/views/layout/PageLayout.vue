<script setup lang="ts">
import Logo from '../../components/Logo.vue';
import Selection from './components/Selection.vue';
import { LayoutDashboard, ArrowLeftRight, CreditCard, Goal, LogOut } from 'lucide-vue-next'


</script>
<template>
    <div class="flex min-h-screen bg-background text-foreground">
        <aside class="w-64 flex-shrink-0 border-r border-border bg-card flex flex-col justify-between">
            <!-- <Sidebar /> -->
             <div>
                <header class="p-6 font-display font-bold text-xl border-border">
                    <Logo />
                </header>
                <div class="p-4 flex flex-col gap-2 mt-4">
                    <Selection :icon="LayoutDashboard" title="Dashboard" to="/app/dashboard" />
                    <Selection :icon="Goal" title="Goals" to="/app/goals" />
                    <Selection :icon="ArrowLeftRight" title="Transactions" to="/app/transactions" />
                    <Selection :icon="CreditCard" title="Cards" to="/app/cards" />
                </div>
             </div>
            
            <footer class="p-4 text-center text-sm text-muted-foreground">
                <Selection :icon="LogOut" title="Sign out" to="/login" />
            </footer>
        </aside>
        
        <section class="w-full border-b border-border flex flex-col ">
            <header class="p-6 bg-card flex flex-col gap-1">
                <span class="text-sm text-muted-foreground">Good morning ☀️</span>
                <h1 class="font-display text-xl font-bold">Hey <span class="gradient-text">Tiago</span></h1>
            </header>

            <main class="p-6 h-full">
                <router-view />
            </main>
        </section>
            

        
    </div>
</template>