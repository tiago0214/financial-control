<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { User, Lock, Mail } from "lucide-vue-next";
import InputText from "primevue/inputtext";
import Logo from "../../components/Logo.vue";
import { useAuthStore } from "../../stores/auth";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { z } from "zod";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Form } from "@primevue/forms";
import Message from "primevue/message";
import { useToast } from "primevue";

const authStore = useAuthStore();
const route = useRouter();
const toast = useToast();

const userData = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const resolver = ref(
  zodResolver(
    z
      .object({
        name: z.string().min(1, { message: "O nome é obrigatório." }),
        email: z.email({ message: "Endereço de email inválido." }),
        password: z
          .string()
          .min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
        confirmPassword: z
          .string()
          .min(6, { message: "As senhas não coincidem." }),
      })
      .check(
        z.refine((data) => data.password === data.confirmPassword, {
          error: "Senhas não coincidem.",
          path: ["confirmPassword"],
        }),
      ),
  ),
);

const onFormSubmit = ({ valid, states }: any) => {
  if (valid) {
    try {
      const name = states.name.value;
      const email = states.email.value;
      const password = states.password.value;

      authStore.register({ name, email, password });

      if (authStore.isAuthenticated) {
        route.push("/app/dashboard");
      } else {
        toast.add({
          severity: "error",
          summary: "Erro",
          detail: "Erro ao registrar. Tente novamente.",
          life: 3000,
        });
      }
    } catch (error: any) {
      toast.add({
        severity: "error",
        summary: "Erro",
        detail: error.message,
        life: 3000,
      });
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
          Comece sua <span class="gradient-text">jornada.</span>
        </h1>
        <p class="mt-3 mb-6 text-muted-foreground">
          Deixe o futuro financeiro começar.
        </p>

        <div class="w-96">
          <div class="flex flex-col gap-8">
            <Form
              class="flex flex-col gap-3"
              v-slot="$form"
              :resolver="resolver"
              :initialValues="userData"
              @submit="onFormSubmit"
            >
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <User
                    class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                  />
                  <InputText
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    :pt="{
                      root: `!w-full !rounded-xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.name?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`,
                    }"
                  />
                </div>
                <Message
                  v-if="$form.name?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.name.error?.message }}</Message
                >
              </div>
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <Mail
                    class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                  />
                  <InputText
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    :pt="{
                      root: `!w-full !rounded-xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.email?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`,
                    }"
                  />
                </div>
                <Message
                  v-if="$form.email?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.email.error?.message }}</Message
                >
              </div>
              <div class="flex flex-col gap-1">
                <div class="relative">
                  <Lock
                    class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                  />
                  <InputText
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                    :pt="{
                      root: `!w-full !rounded-xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.password?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`,
                    }"
                  />
                </div>
                <Message
                  v-if="$form.password?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.password.error?.message }}</Message
                >
              </div>

              <div class="flex flex-col gap-1">
                <div class="relative">
                  <Lock
                    class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none"
                  />
                  <InputText
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    :pt="{
                      root: `!w-full !rounded-xl !border !bg-input/50 !py-3 !pl-11 !pr-4 !text-sm transition-all placeholder:!text-muted-foreground focus:!outline-none focus:!ring-2 ${$form.confirmPassword?.invalid ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500/20' : '!border-border focus:!border-primary focus:!ring-primary/20'}`,
                    }"
                  />
                </div>
                <Message
                  v-if="$form.confirmPassword?.invalid"
                  severity="error"
                  size="small"
                  variant="simple"
                  >{{ $form.confirmPassword.error?.message }}</Message
                >
              </div>

              <div class="pt-5">
                <button
                  class="cursor-pointer group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-elevated transition-all hover:shadow-glow hover:scale-[1.01] disabled:opacity-70"
                  type="submit"
                >
                  Criar conta
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

<style lang="css" scoped></style>
