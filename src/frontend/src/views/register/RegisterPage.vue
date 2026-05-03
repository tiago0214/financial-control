<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { User, Lock, Mail } from 'lucide-vue-next' 
import Input from "../../components/Input.vue";
import Logo from "../../components/Logo.vue";
import { useAuthStore } from "../../stores/auth";
import { reactive } from "vue";

const authStore = useAuthStore();

const userData = reactive({
  name: '',
  email: '',
  password: ''
})

function handleRegister() {
  try {
    console.log("Attempting to register with:", userData)

    if (!userData.name || !userData.email || !userData.password) {
      throw new Error("All fields are required")
    }

    authStore.register(userData)
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <main class="relative min-h-screen overflow-hidden flex items-center justify-center flex-col">
    <div class="absolute inset-0 -z-10 mesh-bg" />
    <div class="absolute inset-0 -z-10 grid-pattern opacity-30" />

    <div class=" max-w-6xl flex items-center justify-center gap-12 px-6">
      <Logo />
    </div>

    <div class=" w-content flex items-center justify-center gap-12 px-6 py-4">
      <div class="mx-auto flex flex-col justify-center items-center rounded-2xl bg-card/30 p-8 shadow-elevated backdrop-blur animate-fade-in">
        <h1 class="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Comece sua <span class="gradient-text">jornada.</span>
        </h1>
        <p class="mt-3 mb-6 text-muted-foreground">
          Deixe o futuro financeiro começar.
        </p>

        <div class="w-96">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-3">
              <Input :Icon="User" type="text" placeholder="Seu nome" v-model="userData.name"/>
              <Input :Icon="Mail" type="email" placeholder="Seu email" v-model="userData.email"/>
              <Input :Icon="Lock" type="password" placeholder="Sua senha" v-model="userData.password" />
            </div>

            <button class="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:shadow-glow hover:scale-[1.01] disabled:opacity-70" @click="handleRegister">
              Criar conta
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<style lang="css" scoped>
</style>

