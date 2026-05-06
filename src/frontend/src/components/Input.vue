<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    Icon: {
        type: Function,
        required: true,
    },
    modelValue: {
        type: String,
        default: '',
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="relative">
        <Icon class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="w-full rounded-2xl border border-border bg-input/50 py-4 pl-11 pr-4 text-sm transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
    </div>
</template>