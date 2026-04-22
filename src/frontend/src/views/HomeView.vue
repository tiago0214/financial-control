<script setup lang="ts">
import api from '../api/api';
import { useQuery } from '@tanstack/vue-query';
import { Button } from 'primevue';

const { data } = useQuery({
    queryKey : ['test'],
    queryFn: async () => {
        const response = await api.get('/');  

        return response.data.message || ''
    }
})

</script>

<template>
    <h1>Home</h1>

    <Button>
        <RouterLink to="/login" style="color: black; text-decoration: none;">Login</RouterLink>
    </Button>
    <div>
        {{ data }}
    </div>
</template>