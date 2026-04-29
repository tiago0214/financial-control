<script setup lang="ts">
import { ArrowRight, MessageSquareText, Sparkles, Target, TrendingUp, Zap } from 'lucide-vue-next';

const features = [
    {
      icon: Target,
      title: "Metas que você realmente quer",
      desc: "Defina qualquer objetivo financeiro, de 'Viajar para o Japão' a 'Ter uma emergência de R$500'. O app se adapta ao que você quer, não o contrário.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Sparkles,
      title: "Assistente de IA, 24/7",
      desc: "Converse sobre seu dinheiro como faria com um amigo. Obtenha planos, lembretes e respostas — nunca palestras.",
      gradient: "from-accent to-warning",
    },
    {
      icon: TrendingUp,
      title: "Projeções futuras",
      desc: "Veja exatamente quando você atingirá cada meta com sua velocidade atual. Então pergunte à IA como chegar lá mais rápido.",
      gradient: "from-primary-glow to-primary",
    },
    {
      icon: Zap,
      title: "Salvamento automático em piloto automático",
      desc: "Arredondamentos, divisões de salário e regras inteligentes que movem dinheiro em direção às metas antes que você possa gastá-lo.",
      gradient: "from-warning to-accent",
    },
    {
      icon: MessageSquareText,
      title: "Insights em português simples",
      desc: "Sem jargão. Apenas respostas claras como 'Você gastou R$84 a mais com café este mês que o anterior.'",
      gradient: "from-primary to-accent",
    },
    {
      icon: ArrowRight,
      title: "Sem taxas ocultas, sem pegadinhas",
      desc: "Tudo o que oferecemos é o que você vê. Sem taxas de assinatura, sem upsells, sem necessidade de cartão de crédito para começar.",
      gradient: "from-accent to-primary",
    },
  ];
</script>

<template>
    <section id="features" class="relative px-6 py-24 md:py-32">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-2xl text-center">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">Why Mildas Helper</span>
          <h2 class="mt-3 font-display text-4xl font-bold md:text-5xl">
            Feito para a vida real. Sem julgamentos, apenas resultados.
          </h2>
          <p class="mt-4 text-muted-foreground">
            A maioria dos aplicativos financeiros fazem você se sentir culpado. O Mildas Helper faz você se sentir poderoso.
          </p>
        </div>

        <div class="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div
            v-for="f in features"
            :key="f.title"
            class="group relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-card p-6 transition-all hover:border-primary/30 hover:shadow-elevated"
            >
                <div :class='`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} shadow-soft`'>
                    <component :is="f.icon" class="h-6 w-6 text-primary-foreground stroke-width='2.5'" />
                </div>
                <h3 class="font-display text-xl font-semibold">{{f.title}}</h3>
                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{f.desc}}</p>
                <div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
            </div>
        </div>
      </div>
    </section>
</template>