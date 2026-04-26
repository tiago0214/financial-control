<script setup lang="ts">
import heroBg from '../../../assets/hero-bg.jpg';
import FloatingPreview from '../components/FloatingPreview.vue';
</script>

<template>
    <section class="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div class="absolute inset-0 -z-10">
            <img
            :src="heroBg"
            alt=""
            width="1536"
            height="1024"
            class="h-full w-full object-cover opacity-40"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
            <div class="absolute inset-0 mesh-bg" />
            <div class="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div class="relative mx-auto max-w-6xl px-6">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium animate-fade-up">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span class="text-muted-foreground">AI Assistant now in beta</span>
          </div>

          <h1 class="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl animate-fade-up" :style="{ animationDelay: '100ms' }">
            Stop tracking your past.
            <br />
            <span class="gradient-text">Start funding your future.</span>
          </h1>

          <p class="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up" :style="{ animationDelay: '200ms' }">
            Finally is the finance app for your generation. Set bold goals, get an AI Assistant in your pocket,
            and watch every dollar build the life you actually want.
          </p>

          <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" :style="{ animationDelay: '300ms' }">
            <RouterLink
              to="/register"
              class="group flex items-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:scale-[1.03] hover:shadow-glow"
            >
              Start free
              <i class="pi pi-arrow-right transition-transform group-hover:translate-x-1" style="font-size: 0.875rem"/>
            </RouterLink>
            <RouterLink
              to="/dashboard"
              class="rounded-2xl glass px-7 py-4 text-base font-semibold text-foreground transition-all hover:bg-secondary"
            >
              See live demo
            </RouterLink>
          </div>

          <p class="mt-6 text-xs text-muted-foreground animate-fade-up" :style="{ animationDelay: '400ms' }">
            No credit card. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div class="relative mx-auto mt-20 max-w-4xl animate-fade-up" :style="{ animationDelay: '500ms' }">
          <FloatingPreview />
        </div>
      </div>
    </section>
</template>