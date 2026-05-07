<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useUiStore } from '../../../stores/ui';
const uiStore = useUiStore();

defineExpose({ open, close })
const props = defineProps({
    modalId: {
        type: String,
        required: true
    },
})
</script>
<template>
    <Dialog 
        :visible="uiStore.isModalOpen && uiStore.activeModalId === props.modalId" 
        @update:visible="(val) => { if (!val) uiStore.closeModal() }"
        :header="uiStore.modalTitle"
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
        <slot></slot>
    </Dialog>
</template>