<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from "./Logo.vue";

const route = useRoute();
const onDashboard = route.path === "/dashboard";
// const onDashboard = pathname.startsWith("/dashboard");
</script>
<template>
     <header class="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-5 py-3">
        <Logo />
        <div class="hidden items-center gap-8 md:flex">
          <a href="/#features" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="/#how" class="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a>
          <a href="/#ai" class="text-sm text-muted-foreground transition-colors hover:text-foreground">AI Assistant</a>
        </div>
        <div class="flex items-center gap-2">
            <div v-if="onDashboard">
                <RouterLink  to="/" class="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    Sign out
                </RouterLink>
            </div>
            
            <div v-else>
                <RouterLink to="/login" class="hidden rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
                    Log in
                </RouterLink>
                <RouterLink to="/login" class="rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.02]" >
                    Get started
                </RouterLink>
            </div>
        </div>
      </nav>
    </header>
</template>