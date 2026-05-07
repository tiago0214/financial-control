import { defineStore } from "pinia";
import { ref } from "vue";


export const useUiStore = defineStore('ui', () => {
    const activeModalId = ref<string | null>(null);
    const isModalOpen = ref(false);
    const modalTitle = ref('');

    function openModal(title: string, id: string) {
        modalTitle.value = title;
        activeModalId.value = id || null;
        isModalOpen.value = true;
    }

    function closeModal() {
        isModalOpen.value = false;
        activeModalId.value = null;
    }

    return {
        isModalOpen,
        modalTitle,
        activeModalId,
        openModal,
        closeModal,
    }
});