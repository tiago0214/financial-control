<script setup lang="ts">
import Logo from "./Logo.vue";
</script>

<template>
     <footer class="border-t border-border/50 bg-card/30 px-6 py-12">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
      <div class="flex flex-col items-center gap-2 md:items-start">
        <Logo />
        <p class="text-sm text-muted-foreground">Money that grows with you.</p>
      </div>
      <div class="flex gap-6 text-sm text-muted-foreground">
        <a href="#" class="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" class="hover:text-foreground transition-colors">Terms</a>
        <a href="#" class="hover:text-foreground transition-colors">Support</a>
      </div>
      <p class="text-xs text-muted-foreground">© 2026 Finly. Built for the next generation.</p>
    </div>
  </footer>
</template>