<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { ref } from 'vue';
const visible = ref(false);
const title = ref("Título do Modal");
function open(newTitle: string) {
    title.value = newTitle;

    visible.value = true;
}

function close() {
    visible.value = false;
}

defineExpose({ open, close })
</script>
<template>
    <Dialog 
        v-model:visible="visible" 
        :header="title"
        modal 
        class="w-120"
        :pt="{
            root: 'bg-background !border !border-border !rounded-3xl shadow-card text-foreground',
            header: 'bg-background text-foreground border-border/50 rounded-t-3xl px-6 py-4',
            title: 'font-display font-bold text-lg',
            content: 'bg-background text-foreground rounded-b-3xl p-6',
            closeButton: 'hover:bg-muted text-muted-foreground transition-colors',
            // mask: 'backdrop-blur-sm bg-background/60',
        }"
    >
        <p>Conteúdo do modal aqui...</p>
    </Dialog>
</template>