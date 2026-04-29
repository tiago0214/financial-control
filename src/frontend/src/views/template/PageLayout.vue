<script setup lang="ts">
import Logo from '../../components/Logo.vue';
import Selection from './components/Selection.vue';
import { LayoutDashboard } from 'lucide-vue-next'


</script>
<template>
    <div class="flex min-h-screen bg-background text-foreground">
        <aside class="w-64 flex-shrink-0 border-r border-border bg-card hidden md:block">
            <!-- <Sidebar /> -->
            <div class="p-6 font-display font-bold text-xl border-border">
                <Logo />
            </div>
            <div class="p-4 flex flex-col gap-2">
                <Selection :icon="LayoutDashboard" title="Dashboard" to="/dashboard" />
            </div>
        </aside>
        
        <header class="w-full border-b border-border flex flex-col ">
            <div class="p-6 bg-card flex flex-col gap-1">
                <span class="text-sm text-muted-foreground">Good morning ☀️</span>
                <h1 class="font-display text-xl font-bold">Hey <span class="gradient-text">Tiago</span></h1>
            </div>

            <main class="p-6 h-full">
                <router-view />
            </main>
        </header>
            

        
    </div>
</template>