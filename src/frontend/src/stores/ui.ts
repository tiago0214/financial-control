import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiStore = defineStore('ui', () => {
    const isModalOpen = ref(false);
    const modalTitle = ref('');

    function openModal(title: string) {
        modalTitle.value = title;
        isModalOpen.value = true;
    }

    return {
        isModalOpen,
        modalTitle,
        openModal,
    }
});