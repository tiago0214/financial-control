<script setup lang="ts">
import { Toast } from "primevue";
</script>

<template>
  <main class="min-h-screen overflow-x-hidden">
    <Toast position="bottom-right" />
    <router-view />
  </main>
</template>
