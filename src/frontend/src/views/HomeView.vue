<script setup lang="ts">
import heroBg from '../assets/hero-bg.jpg';
</script>

<template>
    <section class="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div>
            <img
            :src="heroBg"
            alt=""
            width={1536}
            height={1024}
            className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
            <div className="absolute inset-0 mesh-bg" />
            <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>
    </section>
</template>