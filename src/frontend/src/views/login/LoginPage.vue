<script setup lang="ts">
import Logo from "../../components/Logo.vue";
import { Mail, Lock, ArrowRight } from "lucide-vue-next";
import InputText from "primevue/inputtext";
import { useAuthStore } from "../../stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue";
import { z } from "zod";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { Form } from '@primevue/forms';
import Message from 'primevue/message';

const router = useRouter();

const authStore = useAuthStore();
const userData = reactive({
  email: "",
  password: "",
});

const toast = useToast();

const resolver = ref(zodResolver(
  z.object({
    email: z.email({ message: "Email inválido" }),
    password: z.string().min(1, { message: "Senha é obrigatória" }),
  })
));

const onFormSubmit = ({ valid, states }: any) => {
  if (valid) {
    try {
      const email = states.email.value;
      const password = states.password.value;

      const sucess = authStore.login(email, password);

      if (sucess) {
        router.push("/app/dashboard");
      } else {
        toast.add({
          severity: "error",
          summary: "Erro",
          detail: "Credenciais inválidas!",
          life: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
<template>
  <main
    class="relative min-h-screen overflow-hidden flex items-center justify-center flex-col"
  >
    <div class="absolute inset-0 -z-10 mesh-bg" />
    <div class="absolute inset-0 -z-10 grid-pattern opacity-30" />

    <div class="max-w-6xl flex items-center justify-center gap-12 px-6">
      <Logo />
    </div>

    <div class="w-content flex items-center justify-center gap-12 px-6 py-4">
      <div
        class="mx-auto flex flex-col justify-center items-center rounded-2xl bg-card/30 p-8 shadow-elevated backdrop-blur animate-fade-in"
      >
        <h1 class="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Bem vindo!
        </h1>
        <p class="mt-3 mb-6 text-muted-foreground">
          Faça login para continuar sua jornada
        </p>

        <div class="w-96">
          <div class="flex flex-col gap-8">
            <Form class="flex flex-col gap-3" v-slot="$form" :resolver="resolver" :initialValues="userData" @submit="onFormSubmit">
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <Mail class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none" />
                  <InputText
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    :pt="{
                      root: `!w-full !rounded-2xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.email?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`
                    }"
                  />
                </div>
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
              </div>
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <Lock class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none" />
                  <InputText
                    name="password"
                    type="password"
                    placeholder="Senha"
                    :pt="{
                      root: `!w-full !rounded-2xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.password?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`
                    }"
                  />
                </div>
                <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error?.message }}</Message>
              </div>

              <div class="pt-5">
                <button
                  class="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:shadow-glow hover:scale-[1.01] disabled:opacity-70"
                  type="submit"
                >
                  Entrar
                  <ArrowRight
                    class="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>