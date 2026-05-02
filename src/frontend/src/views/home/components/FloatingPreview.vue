<script setup lang="ts">
import { TrendingUp, Target, Sparkles } from 'lucide-vue-next'
</script>

<template>
    <div class="relative">
    <div class="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-glow blur-3xl" />

    <div class="rounded-3xl glass-strong p-6 shadow-elevated">
      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div class="flex items-center justify-between text-xs text-muted-foreground">
            <span>Saldo total</span>
            <TrendingUp class="h-4 w-4 text-primary" />
          </div>
          <div class="mt-2 font-display text-3xl font-bold">R$12,847</div>
          <div class="mt-1 text-xs text-primary">+R$340 essa semana</div>
          <div class="mt-4 h-12 w-full">
            <!-- SparkLine -->
            <svg viewBox="0 0 200 50" class="h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.4" />
                  <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,25 L140,15 L160,18 L180,8 L200,10 L200,50 L0,50 Z"
                fill="url(#spark)"
              />
              <path
                d="M0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,25 L140,15 L160,18 L180,8 L200,10"
                fill="none"
                stroke="var(--color-primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div class="flex items-center justify-between text-xs text-muted-foreground">
            <span>Viagem a Tóquio</span>
            <Target class="h-4 w-4 text-accent" />
          </div>
          <div class="mt-2 font-display text-3xl font-bold">68%</div>
          <div class="mt-1 text-xs text-muted-foreground">R$3,400 of R$5,000</div>
          <div class="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
            <div class="h-full w-[68%] rounded-full bg-gradient-accent" />
          </div>
        </div>

        <div class="rounded-2xl bg-gradient-card p-5 shadow-card">
          <div class="flex items-center justify-between text-xs text-muted-foreground">
            <span>Assistente de IA</span>
            <Sparkles class="h-4 w-4 text-primary-glow" />
          </div>
          <div class="mt-2 text-sm leading-snug">
            Evite 2 pedidos de comida por semana → chegue a Tóquio até agosto 🗼
          </div>
          <button class="mt-3 w-full rounded-xl bg-primary/10 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors">
            Aplicar sugestão
          </button>
        </div>
      </div>
    </div>
  </div>
</template>