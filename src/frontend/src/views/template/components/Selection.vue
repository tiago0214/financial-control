<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    icon: {
        type: Function,
        required: false,
    },
})

const route = useRoute();
const shouldHighlight = computed(() => {
    return route.path === `/app/${props.title.toLowerCase()}`;
})


</script>
<template>
    <RouterLink :to="to" :class="shouldHighlight ? 'bg-primary/10 hover:bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-muted'" class="px-3 py-2.5 font-medium transition-colors flex items-center rounded-md">
        <component :is="icon" class="w-4 h-4 mr-2 ml-2" />
        <span class="font-semibold text-sm ">{{ title }}</span>
    </RouterLink>
</template>