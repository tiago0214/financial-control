<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { User, Lock, Mail } from 'lucide-vue-next' 
import Input from "./components/Input.vue";
import Logo from "../home/components/Logo.vue";
</script>

<template>
  <main class="relative min-h-screen overflow-hidden">
    <div class="absolute inset-0 -z-10 mesh-bg" />
    <div class="absolute inset-0 -z-10 grid-pattern opacity-30" />

    <div class="px-6 pt-8">
      <Logo />
    </div>

    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
      <!-- LEFT HAND -->
      <div class="mx-auto w-full max-w-md lg:mx-0">
        <h1 class="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Start your <span class="gradient-text">money era.</span>
        </h1>
        <p class="mt-3 mb-6 text-muted-foreground">
          Free forever. Takes 60 seconds. Your AI Assistant is waiting.
        </p>

        <div class="w-96">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <Input :Icon="User" type="text" placeholder="Your name"/>
              <Input :Icon="Mail" type="email" placeholder="Your email"/>
              <Input :Icon="Lock" type="password" placeholder="Password" />
            </div>

            <button class="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:shadow-glow hover:scale-[1.01] disabled:opacity-70">
              Create Account
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT HAND -->
      <div class="mx-auto w-full max-w-md lg:mx-0">
        CONTAINER FOR ILLUSTRATION
      </div>
    </div>


  </main>

  <!-- <Button> -->
  <!--   <RouterLink to="/" style="color: black; text-decoration: none" -->
  <!--     >Home</RouterLink -->
  <!--   > -->
  <!-- </Button> -->
</template>

<style lang="css" scoped>
</style>

