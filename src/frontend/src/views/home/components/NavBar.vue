<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next';
// const onDashboard = pathname.startsWith("/dashboard");
</script>
<template>
     <header class="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav class="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-5 py-3">
        <RouterLink to="/" class='flex items-center gap-2'>
            <div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles class="h-5 w-5 text-primary-foreground" stroke-width="2.5" />
            </div>
            <span class="font-display text-xl font-bold tracking-tight">Mildas Helper</span>
        </RouterLink>
        <div class="hidden items-center gap-8 md:flex">
          <a href="/#features" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="/#how" class="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a>
          <a href="/#ai" class="text-sm text-muted-foreground transition-colors hover:text-foreground">AI Assistant</a>
        </div>
        <!-- <div class="flex items-center gap-2">
          {onDashboard ? (
            <Link to="/" class="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Sign out
            </Link>
          ) : (
              <Link to="/register" class="hidden rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
                Log in
              </Link>
              <Link
                to="/register"
                class="rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:scale-[1.02]"
              >
                Get started
              </Link>
          )}
        </div> -->
      </nav>
    </header>
</template>