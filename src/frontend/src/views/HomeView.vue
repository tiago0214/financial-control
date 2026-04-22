<script setup lang="ts">
import api from '../api/api';
import { ref } from 'vue'
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading } = useQuery({
    queryKey : ['test'],
    queryFn: async () => {
        const response = await api.get('/');  

        return response.data.message || ''
    }
})

</script>

<template>
    <h1>Home</h1>

    {{ data }}
</template>