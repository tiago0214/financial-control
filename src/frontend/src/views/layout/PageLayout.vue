<script setup lang="ts">
import Logo from '../../components/Logo.vue';
import Selection from './components/Selection.vue';
import { LayoutDashboard, ArrowLeftRight, CreditCard, Goal, LogOut } from 'lucide-vue-next'
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
function handleLogout() {
    authStore.logout();
    router.push('/login');
}
</script>
<template>
    <div class="flex min-h-screen bg-background text-foreground">
        <aside class="w-64 shrink-0 border-r border-border bg-card flex flex-col justify-between">
            <!-- <Sidebar /> -->
             <div>
                <header class="p-6 font-display font-bold text-xl border-border">
                    <Logo />
                </header>
                <div class="p-4 flex flex-col gap-2 mt-4">
                    <Selection :icon="LayoutDashboard" title="Dashboard" to="/app/dashboard" />
                    <Selection :icon="Goal" title="Metas" to="/app/goals" />
                    <Selection :icon="ArrowLeftRight" title="Transações" to="/app/transactions" />
                    <Selection :icon="CreditCard" title="Cartões" to="/app/cards" />
                </div>
             </div>
            
            <footer class="p-4 text-center text-sm text-muted-foreground">
                <div class="text-muted-foreground hover:bg-muted cursor-pointer px-3 py-2.5 font-medium transition-colors flex items-center rounded-md" @click="handleLogout">
                    <LogOut class="w-4 h-4 mr-2 ml-2" />
                    <span class="font-semibold text-sm ">Sair</span>
                </div>
            </footer>
        </aside>
        
        <section class="w-full border-b border-border flex flex-col ">
            <header class="p-6 bg-card flex flex-col gap-1">
                <span class="text-xs text-muted-foreground">Bom dia ☀️</span>
                <h1 class="font-display text-xl font-bold gradient-text">{{ authStore.user?.name || 'Usuário' }}</h1>
            </header>

            <main class="p-6 h-full">
                <router-view />
            </main>
        </section>
    </div>
</template>