<script setup lang="ts">
import Logo from '../../components/Logo.vue';
import Selection from './components/Selection.vue';
import { LayoutDashboard, ArrowLeftRight, Goal, LogOut } from 'lucide-vue-next'
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import CustomModal from './components/CustomModal.vue';
import { useUiStore } from '../../stores/ui';

// STORES
const uiStore = useUiStore();
const authStore = useAuthStore();

const router = useRouter();
function handleLogout() {
    authStore.logout();
    router.push('/login');
}

const greetings = [
    "Bom dia ☀️",
    "Boa tarde 🌤️",
    "Boa noite 🌙",
];
const mappedGreetings = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return greetings[0];
    else if (hour < 18) return greetings[1];
    else return greetings[2];
});

const route = useRouter();
const activeRoute = computed(() => route.currentRoute.value.path);

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
                    <!-- <Selection :icon="CreditCard" title="Cartões" to="/app/cards" /> -->
                </div>
             </div>
            
            <footer class="p-4 text-center text-sm text-muted-foreground">
                <div class="text-muted-foreground hover:bg-muted cursor-pointer px-3 py-2.5 font-medium transition-colors flex items-center rounded-md" @click="handleLogout">
                    <LogOut class="w-4 h-4 mr-2 ml-2" />
                    <span class="font-semibold text-sm ">Sair</span>
                </div>
            </footer>
        </aside>
        
        <!-- Top Navigation -->
        <section class="w-full border-b border-border flex flex-col ">
            <header class="p-6 bg-card flex gap-1 justify-between items-center">
                <div>
                    <span class="text-xs text-muted-foreground">{{ mappedGreetings }}</span>
                    <h1 class="font-display text-xl font-bold gradient-text">{{ authStore.user?.name || 'Usuário' }}</h1>
                </div>
                <div>
                    <button v-if="activeRoute == '/app/goals'" class="rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.03] cursor-pointer mr-6" @click="uiStore.openModal('Adicionar Meta')">Adicionar Meta</button>
                    <button v-if="activeRoute == '/app/transactions'" class="rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.03] cursor-pointer mr-6" @click="uiStore.openModal('Adicionar Transação')">Adicionar Transação</button>
                </div>
            </header>

            <main class="p-6 h-full">
                <router-view />
            </main>
        </section>

        <CustomModal />
    </div>
</template>