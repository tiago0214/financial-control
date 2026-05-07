<script setup lang="ts">
import Logo from "../../components/Logo.vue";
import { Mail, Lock, ArrowRight } from "lucide-vue-next";
import Input from "../../components/Input.vue";
import { useAuthStore } from "../../stores/auth";
import { reactive } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore();
const userData = reactive({
  email: '',
  password: ''
})

function handleLogin() {
  try {
    if (!userData.email || !userData.password) {
      alert("All fields are required")
      return
    }

    const sucess = authStore.login(userData.email, userData.password);

    if(sucess){
        router.push('/app/dashboard')
    }else{
        alert("Invalid credentials!")
    }
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
                Bem vindo!
                </h1>
                <p class="mt-3 mb-6 text-muted-foreground">
                Faça login para continuar sua jornada
                </p>

                <div class="w-96">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col gap-3">
                        <Input :Icon="Mail" type="email" placeholder="Seu email" v-model="userData.email" />
                        <Input :Icon="Lock" type="password" placeholder="Senha" v-model="userData.password" />
                    </div>

                    <div>
                        <button class="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:shadow-glow hover:scale-[1.01] disabled:opacity-70" @click="handleLogin">
                            Entrar
                            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
      </div>
    </div>
    </main>
</template>