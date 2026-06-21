<script setup lang="ts">
import { Toast } from "primevue";
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.fetchUser();
});
</script>

<template>
  <main class="min-h-screen overflow-x-hidden">
    <Toast position="bottom-right" />
    <router-view />
  </main>
</template>
